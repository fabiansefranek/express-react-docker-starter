import express from "express";
import dotenv from "dotenv";
import sampleRoute from "./routes/sample.route";
import errorHandler from "./middlewares/error.middleware";
import cors from "cors";

dotenv.config();
const PORT: number = parseInt(process.env.PORT!);

const app = express();

app.use(cors({ origin: "*" }));
app.use("/api", sampleRoute);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
