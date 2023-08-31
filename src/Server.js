const express = require("express");
const cors = require("cors");
const axios = require("axios");

const Base_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_key = "AIzaSyDvokqupH11FbQQzsLef7m9Ly4I0TKqEpU";

const app = express();

app.use(cors());


app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(`${Base_URL}?part=snippet&q=${selectedCategory}&type=video&regionCode=US&maxResults=50&key=${API_key}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});