import express  from "express";
import router from "./routes/chara.route";  
import "./dbconnection";
import cors from "cors";
import dbConnection from "./dbconnection";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

dbConnection();

app.get("/", (_, res) => {
    const currentTime = new Date().toLocaleString();
    res.status(200).send({
        status: 200,
        message: "Success",
        date: currentTime
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
