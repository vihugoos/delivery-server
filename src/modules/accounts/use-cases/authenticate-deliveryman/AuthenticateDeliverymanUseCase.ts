import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "@database/prisma-client";
import { AppError } from "@errors/AppError";
import { auth } from "@config/auth";

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

        const token = sign({ username }, auth.deliveryman_secret_token, {
            subject: deliveryman.id,
            expiresIn: auth.expires_in_token,
        });

        return token;
    }
}

export { AuthenticateDeliverymanUseCase };
