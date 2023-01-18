import { hash } from "bcrypt";
import { prisma } from "../../../../database/prisma-client";
import { AppError } from "../../../../errors/AppError";

interface ICreateDeliveryman {
    username: string;
    password: string;
}

class CreateDeliverymanUseCase {
    async execute({ username, password }: ICreateDeliveryman) {
        const deliverymanExists = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive",
                },
            },
        });

        if (deliverymanExists) {
            throw new AppError("Deliveryman already exists.");
        }

        const hashPassword = await hash(password, 10);

        const deliveryman = await prisma.deliveryman.create({
            data: {
                username: username.toLowerCase(),
                password: hashPassword,
            },
        });

        return deliveryman;
    }
}

export { CreateDeliverymanUseCase };
