import { prisma } from "@database/prisma-client";
import { AppError } from "@errors/AppError";

interface ICloseDelivery {
    id_delivery: string;
    id_deliveryman: string;
}

class CloseDeliveryUseCase {
    async execute({
        id_delivery,
        id_deliveryman,
    }: ICloseDelivery): Promise<void> {
        const SUCCESS = 1;

        const { count } = await prisma.deliveries.updateMany({
            where: {
                id: id_delivery,
                id_deliveryman,
            },
            data: {
                end_at: new Date(),
            },
        });

        if (count != SUCCESS) {
            throw new AppError("There was an error trying to close delivery.");
        }
    }
}

export { CloseDeliveryUseCase };
