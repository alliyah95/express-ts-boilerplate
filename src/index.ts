import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello there!!!!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});
