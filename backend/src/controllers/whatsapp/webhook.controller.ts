import AbstractController from "controllers/index.controller";
import { InternalServerError } from "errors/internal-server-error";
import { NextFunction, Request, Response } from "express";
import ThemeService from "services/theme.service";

class WhatsAppController extends AbstractController {
    post() {
        return [
            async (_: Request, res: Response, next: NextFunction) => {
                try {
                    ThemeService.change();
                    res.sendStatus(200);
                } catch (e: unknown) {
                    console.error(e);
                    next(new InternalServerError());
                }
            }
        ];
    }
}

export default WhatsAppController;
