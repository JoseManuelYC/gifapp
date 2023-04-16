export const getGifs = async (category) => {
  const api_key = "DGBenhYtJog7l2g6Ye8KHc8wS5E2MbNG";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=5`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gif = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gif);
  return gif;
};
