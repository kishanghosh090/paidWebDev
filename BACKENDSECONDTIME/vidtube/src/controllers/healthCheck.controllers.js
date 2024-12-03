import { ApiResponse } from "../utils/ApiResponse.js";
// import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .json(new ApiResponse(200, "success", "health check passed"));
});

export { healthCheck };
