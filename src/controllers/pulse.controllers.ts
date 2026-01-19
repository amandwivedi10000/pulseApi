import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

const pulse = asyncHandler(async (req, res) => {
    const { message } = req.body;

    res.status(200).json(new ApiResponse(200, { message: `${message}` }));
});

export { pulse };
