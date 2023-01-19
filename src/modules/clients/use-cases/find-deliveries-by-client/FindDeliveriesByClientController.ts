import { Request, Response } from "express";

import { FindDeliveriesByClientUseCase } from "./FindDeliveriesByClientUseCase";

class FindDeliveriesByClientController {
    async handle(request: Request, response: Response) {
        const { id_client } = request;

        const findDeliveriesByClientUseCase =
            new FindDeliveriesByClientUseCase();

        const deliveries = await findDeliveriesByClientUseCase.execute(
            id_client
        );

        return response.json({ deliveries });
    }
}

export { FindDeliveriesByClientController };
