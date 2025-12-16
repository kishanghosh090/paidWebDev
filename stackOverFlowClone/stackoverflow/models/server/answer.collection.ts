import { IndexType, Permission } from "node-appwrite";

import { db, answerCollection } from "../name";
import { databases } from "./config";

export default async function createAnswerCollection() {
  await databases.createCollection(db, answerCollection, answerCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);

  // creating attributes

  await Promise.all([
    databases.createStringAttribute(
      db,
      answerCollection,
      "content",
      10000,
      true
    ),
    databases.createStringAttribute(
      db,
      answerCollection,
      "questionId",
      100,
      true
    ),
    databases.createStringAttribute(
      db,
      answerCollection,
      "autherId",
      50,
      true,
      undefined,
      true
    ),
  ]);
  console.log("question attribute created");
  // create indexs
}
