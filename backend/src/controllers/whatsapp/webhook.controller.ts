import AbstractController from "controllers/index.controller";
import { InternalServerError } from "errors/internal-server-error";
import { NextFunction, Request, Response } from "express";

class WhatsAppController extends AbstractController {
    post() {
        return [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    console.log(req);
                    console.log(res);
                } catch (e: unknown) {
                    console.error(e);
                    next(new InternalServerError());
                }
            }
        ];
    }
}

export default WhatsAppController;
