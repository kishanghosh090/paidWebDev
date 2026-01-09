import express, { NextFunction, Request, Response } from "express";
import { usersTable } from "../db/schema";
import { db } from "../db";
import { sql } from "drizzle-orm";

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
    } catch (error) {}
  }
);

export default router;
