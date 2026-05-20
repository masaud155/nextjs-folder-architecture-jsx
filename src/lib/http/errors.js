export class AppError extends Error {
  constructor(message, statusCode = 500, code = "APP_ERROR") {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.code = code;
  }
}

export function createHttpError(message, statusCode = 500, code = "APP_ERROR") {
  return new AppError(message, statusCode, code);
}

export function errorResponse(error) {
  return Response.json(
    {
      error: {
        message: error.message || "Unexpected error.",
        code: error.code || "APP_ERROR"
      }
    },
    { status: error.statusCode || 500 }
  );
}
