import express, { NextFunction, Request, Response } from "express";
import { usersTable } from "../db/schema";
import { db } from "../db";
import { sql, ilike } from "drizzle-orm";

const router = express.Router();

router.get(
  "/getBooks/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req?.params;

    // console.log(req?.params?.id);
    try {
      const userById = await db
        .select()
        .from(usersTable)
        .where(sql`${usersTable.id} = ${id}`);
      console.log(userById);

      return res.json(userById);
    } catch (error) {
      return res.json({ msg: "error occured please try again later" });
    }
  }
);

router.get(
  "/searchUser",
  async (req: Request, res: Response, next: NextFunction) => {
    const search = req.query.search;
    console.log(search);
    if (search) {
      const books = await db
        .select()
        .from(usersTable)
        .where(
          sql`to_tsvector('english', ${usersTable.name}) @@ to_tsquery('english', ${search})`
        );

      console.log(books);

      return res.json(books);
    }
    return res.json({});
  }
);

export default router;
