import { prisma } from "../../../../database/prisma-client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface IAuthenticateDeliveryman {
    username: string;
    password: string;
}

class AuthenticateDeliverymanUseCase {
    async execute({ username, password }: IAuthenticateDeliveryman) {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive",
                },
            },
        });

        if (!deliveryman) {
            throw new AppError("Username or password invalid!");
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if (!passwordMatch) {
            throw new AppError("Username or password invalid!");
        }

        const token = sign({ username }, "66a0ce34cce5548d49d01c8ebb1b132c", {
            subject: deliveryman.id,
            expiresIn: "1d",
        });

        return token;
    }
}

export { AuthenticateDeliverymanUseCase };
