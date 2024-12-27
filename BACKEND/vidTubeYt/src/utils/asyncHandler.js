const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      next(error);
    });
  };
};

export { asyncHandler };

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//   } catch (error) {
//     res.status(500).json({ message: error.message }).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
