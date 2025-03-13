export const getUser = async () => {
  return fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      id: 200,
    }),
  }).then((res) => {
    console.log({ res });
  });
};
