import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const result = response.data;
    console.log(response.data);

    res.render("index.ejs", {
      data: result,
      error: null,
    });
  } catch (error) {
    console.error("Error fetching joke: ", error.message);
    res.render("index.ejs", {
      data: null,
      error: "Gagal mengambil data candaan. Coba lagi ya!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
