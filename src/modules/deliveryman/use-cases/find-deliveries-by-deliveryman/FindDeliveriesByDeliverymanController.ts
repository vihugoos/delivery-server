import { Request, Response } from "express";
import { FindDeliveriesByDeliverymanUseCase } from "./FindDeliveriesByDeliverymanUseCase";

class FindDeliveriesByDeliverymanController {
    async handle(request: Request, response: Response) {
        const { id_deliveryman } = request;

        const findDeliveriesByDeliverymanUseCase =
            new FindDeliveriesByDeliverymanUseCase();

        const deliveries = await findDeliveriesByDeliverymanUseCase.execute(
            id_deliveryman
        );

        return response.json({ deliveries });
    }
}

export { FindDeliveriesByDeliverymanController };
