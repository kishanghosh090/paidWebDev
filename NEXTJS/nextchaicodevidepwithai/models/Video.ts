import { Document, model, models, ObjectId, Schema } from "mongoose";

export const VIDEO_DIMENSIONS = {
  width: 1280,
  height: 720,
} as const;

export interface IVideo {
  _id?: ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformation?: {
    height: number;
    width: number;
    quality: number;
  };
}

const videoSchema = new Schema<IVideo>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    transformation: {
      height: {
        type: Number,
        default: VIDEO_DIMENSIONS.height,
      },
      width: {
        type: Number,
        default: VIDEO_DIMENSIONS.width,
      },
      quality: {
        type: Number,
        default: 0.5,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Video = models.Video || model<IVideo>("Video", videoSchema);

export default Video;
