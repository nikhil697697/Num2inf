export default async function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "No number provided" });
  }

  try {
    const response = await fetch(
      `http://api.igfollows.site/num-info/?key=nobi1&number=${number}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
