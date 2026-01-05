import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";

const PORT = process.env.PORT || 3004;

const app = express();

let book = [
  {
    _id: 1,
    name: "harry poter",
    price: 1299,
  },
  {
    _id: 2,
    name: "harry poter",
    price: 1299,
  },
  {
    _id: 3,
    name: "harry poter",
    price: 1299,
  },
  {
    _id: 4,
    name: "harry poter",
    price: 1299,
  },
  {
    _id: 5,
    name: "harry poter",
    price: 1299,
  },
  {
    _id: 6,
    name: "harry poter",
    price: 1299,
  },
];

app.use(express.json({ limit: "20kb" }));
app.use(function (req: Request, res: Response, next: NextFunction) {
  console.log(`in middleware`);
  next();
});

app.get("/getBooks", (req, res) => {
  return res.json(book);
});

app.listen(PORT, () => {
  console.log(`server is listnig at PORT ${PORT}`);
});
