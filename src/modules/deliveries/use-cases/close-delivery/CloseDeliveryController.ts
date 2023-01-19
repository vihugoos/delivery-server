import { Request, Response } from "express";
import { CloseDeliveryUseCase } from "./CloseDeliveryUseCase";

class CloseDeliveryController {
    async handle(request: Request, response: Response) {
        const { id: id_delivery } = request.params;
        const { id_deliveryman } = request;

        const closeDeliveryUseCase = new CloseDeliveryUseCase();

        await closeDeliveryUseCase.execute({
            id_delivery,
            id_deliveryman,
        });

        return response.status(204).send();
    }
}

export { CloseDeliveryController };
