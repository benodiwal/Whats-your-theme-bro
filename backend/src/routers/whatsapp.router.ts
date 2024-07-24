import WhatsAppController from "controllers/whatsapp/webhook.controller";
import AbstractRouter from "./index.router";

class WhatsAppRouter extends AbstractRouter {
    registerRoutes() {
        const whatsAppController = new WhatsAppController(this.ctx);
        this.registerPOST('/webhook', whatsAppController.post());
    }
}

export default WhatsAppRouter;
