import { Request } from "express";
import { Response } from "express";

export async function sendError(
    req: Request,
    res: Response,
    statusCode: number,
    errorMessage: string
): Promise<void> {
    res.statusMessage = errorMessage;
    res.status(statusCode);
    res.end();
}

export async function sendSuccess(
    req: Request,
    res: Response,
    statusCode: number,
    data: object
): Promise<void> {
    res.status(statusCode).json({
        ...data,
    });
}
