import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";
import { sendError } from "../utils/responseUtils";
import { webTokenManager } from "../services/tokenManager";
import { userController } from "../controllers/controllers";
import { TokenValidationResult } from "shared/src/types/TokenType";
import { UserRoles, UserType } from "shared/src/types/UserType";

export async function authTokenHeader(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const authHeader = req?.headers["authorization"];

        const token: string = authHeader?.split(" ")[1] ?? "";
        const tokenData: TokenValidationResult = webTokenManager.verifyWebToken(token);

        if (!tokenData.valid) {
            req.user = undefined;
            return next();
        }

        if (tokenData.decoded?.id) {
            const userDb = await userController.getById(tokenData.decoded.id);
            req.user = userDb as UserType;
        }

        return next();
    } catch (err) {
        sendError(req, res, 500, "Authorization Token Error");
    }
}
