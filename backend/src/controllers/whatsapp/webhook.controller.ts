import AbstractController from "controllers/index.controller";
import { InternalServerError } from "errors/internal-server-error";
import { NextFunction, Request, Response } from "express";
import z from 'zod';

class WhatsAppController extends AbstractController {
    post() {
        const payloadSchema = z.object({ notification: z.any() });
        type IPayload = z.infer<typeof payloadSchema>;

        return [
            async (req: Request<unknown, unknown, IPayload>, res: Response, next: NextFunction) => {
                try {
                    const { notification } = req.body;
                    console.log(notification);
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
