import { supabase } from "@/lib/utils/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const createThunk = (actionType, url) => {
  return createAsyncThunk(actionType, async (params, { rejectWithValue }) => {
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData) {
      return rejectWithValue({ message: "Unauthorized" });
    }
    const headers = {
      Authorization: `Bearer ${sessionData.session.access_token}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(url, params, { headers });
      if (response.status === 200) {
        return response.data.data;
      } else {
        return rejectWithValue(response);
      }
    } catch (error) {
      console.log({ error });
      alert("api error");
      return rejectWithValue(error?.response?.data?.status || error);
    }
  });
};

const apis = [
  {
    actionType: "gig/postGig",
    url: "/api/gig",
  },
  {
    actionType: "gig/getGigs",
    url: "/api/gig",
  },
  {
    actionType: "wallet/getBalance",
    url: "/api/wallet",
  },
  {
    actionType: "wallet/addBalance",
    url: "/api/wallet",
  },
];

export const thunks = apis.reduce((acc, api) => {
  const { actionType, url } = api;
  const thunkName = actionType.split("/")[1];
  acc[thunkName] = createThunk(actionType, url);
  return acc;
}, {});

export const { postGig, getGigs, getBalance, addBalance } = thunks;
