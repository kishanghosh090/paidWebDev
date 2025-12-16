import { IndexType, Permission } from "node-appwrite";

import { db, questionAttachmentBucket, questionCollection } from "../name";
import { databases, storage } from "./config";

export default async function getOrcreateSstorage() {
  try {
    await storage.getBucket(questionAttachmentBucket);
    console.log("storage connected");
  } catch (error) {
    try {
      await storage.createBucket(
        questionAttachmentBucket,
        questionAttachmentBucket,
        [
          Permission.read("any"),
          Permission.read("users"),
          Permission.create("users"),
          Permission.update("users"),
          Permission.delete("users"),
        ],
        false,
        undefined,
        undefined,
        ["jpg", "png", "gif", "jpeg", "webp", "heic"]
      );
    } catch (error) {}
  }
}
