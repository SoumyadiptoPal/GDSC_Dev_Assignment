export const fetchData = async (req, res) => {
  const request = await fetch("https://gdscdev.vercel.app/api", {
    method: "GET",
  });
  const json = await request.json();
  // console.log(json);
  return json;
};
