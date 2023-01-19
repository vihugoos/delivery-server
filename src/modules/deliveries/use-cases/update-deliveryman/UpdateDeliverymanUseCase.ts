import { prisma } from "@database/prisma-client";

interface IUpdateDeliveryman {
    id_delivery: string;
    id_deliveryman: string;
}

class UpdateDeliverymanUseCase {
    async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
        const delivery = await prisma.deliveries.update({
            where: {
                id: id_delivery,
            },
            data: {
                id_deliveryman,
            },
        });

        return delivery;
    }
}

export { UpdateDeliverymanUseCase };
