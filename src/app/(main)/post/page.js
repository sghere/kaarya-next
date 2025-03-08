"use client";

import { postGig } from "@/thunks/apiThunks";
import { supabase } from "@/utils/supabase";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const categories = [
  "Web Development",
  "Graphic Design",
  "Writing",
  "Marketing",
  "Video Editing",
];

const PostGigForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const uploadImage = async (file) => {
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("gig-images") // Make sure to create this bucket in Supabase
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading image:", error);
      return null;
    }
    return data.path;
  };

  const onSubmit = async (data) => {
    setLoading(true);

    let imagePath = null;
    // if (data.image[0]) {
    //   imagePath = await uploadImage(data.image[0]);
    // }
    const { data: sessionData } = await supabase.auth.getSession();
    const gig = {
      title: data.title,
      category: data.category,
      budget: data.budget,
      description: data.description,
      created_at: new Date().toISOString(),
    };

    console.log("Gig Data:", gig);

    // TODO: Send `gig` data to your API or Supabase table
    console.log({ sessionData });
    dispatch(postGig(gig));

    // axios
    //   .post("/api/gig", gig, {
    //     headers: {
    //       Authorization: `Bearer ${sessionData.session.access_token}`,
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     console.log({ res });
    //     alert("Gig posted successfully!");
    //   });

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-background-950 text-white shadow-md rounded-md"
    >
      <label className="block mb-2">Title</label>
      <input
        type="text"
        {...register("title", { required: "Title is required" })}
        className="w-full p-2 border rounded"
      />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}

      <label className="block mt-4 mb-2">Category</label>
      <select
        {...register("category")}
        className="w-full p-2 border border-y bg-background-950 rounded"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <label className="block mt-4 mb-2">Budget (₹)</label>
      <input
        type="number"
        {...register("budget", { required: "Budget is required" })}
        className="w-full p-2 border rounded"
      />
      {errors.budget && <p className="text-red-500">{errors.budget.message}</p>}

      <label className="block mt-4 mb-2">Description</label>
      <textarea
        {...register("description", { required: "Description is required" })}
        className="w-full p-2 border rounded"
        rows="3"
      ></textarea>
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}

      <label className="block mt-4 mb-2">Location (City)</label>
      <input
        type="text"
        {...register("location")}
        className="w-full p-2 border rounded"
      />

      {/* <label className="block mt-4 mb-2">Upload Image</label>
      <input
        type="file"
        {...register("image")}
        className="w-full p-2 border rounded"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files[0]) {
            setImagePreview(URL.createObjectURL(e.target.files[0]));
          }
        }}
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="mt-2 w-40 h-40 object-cover rounded"
        />
      )} */}

      <button
        type="submit"
        className="w-full mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? "Posting..." : "Post Gig"}
      </button>
    </form>
  );
};

export default PostGigForm;
