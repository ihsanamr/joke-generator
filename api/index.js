import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", async (req, res) => {
  try {
    const jokeApiUrl =
      "https://v2.jokeapi.dev/joke/Any?safe-mode&blacklistFlags=nsfw,sexist,explicit";
    const response = await axios.get(jokeApiUrl);
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

export default app;
