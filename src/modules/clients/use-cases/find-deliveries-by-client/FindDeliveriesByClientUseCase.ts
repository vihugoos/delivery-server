import { prisma } from "@database/prisma-client";

class FindDeliveriesByClientUseCase {
    async execute(id_client: string) {
        const deliveries = await prisma.clients.findMany({
            where: {
                id: id_client,
            },
            select: {
                id: true,
                username: true,
                deliveries: true,
            },
        });

        return deliveries;
    }
}

export { FindDeliveriesByClientUseCase };
