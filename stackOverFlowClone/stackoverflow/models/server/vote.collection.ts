import { IndexType, Permission } from "node-appwrite";

import { db, voteCollection } from "../name";
import { databases } from "./config";

export default async function createVoteCollection() {
  await databases.createCollection(db, voteCollection, voteCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);

  // creating attributes

  await Promise.all([
    databases.createEnumAttribute(
      db,
      voteCollection,
      "type",
      ["question", "answer"],
      true
    ),
    databases.createStringAttribute(db, voteCollection, "typeId", 10000, true),
    databases.createEnumAttribute(
      db,
      voteCollection,
      "voteStatus",
      ["upvote", "downvote"],
      true
    ),
    databases.createStringAttribute(db, voteCollection, "votedBy", 50, false),
  ]);
  console.log("question attribute created");
  // create indexs
}
