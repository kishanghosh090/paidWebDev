import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";

const PORT = process.env.PORT || 3004;

const app = express();

app.use(express.json({ limit: "20kb" }));
app.use(function (req: Request, res: Response, next: NextFunction) {});

app.listen(PORT, () => {
  console.log(`server is listnig at PORT ${PORT}`);
});
