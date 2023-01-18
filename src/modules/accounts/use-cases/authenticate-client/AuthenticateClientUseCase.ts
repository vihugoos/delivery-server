import { prisma } from "../../../../database/prisma-client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";
import { auth } from "../../../../config/auth";

interface IAuthenticateClient {
    username: string;
    password: string;
}

class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient) {
        const client = await prisma.clients.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive",
                },
            },
        });

        if (!client) {
            throw new AppError("Username or password invalid!");
        }

        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) {
            throw new AppError("Username or password invalid!");
        }

        const token = sign({ username }, auth.client_secret_token, {
            subject: client.id,
            expiresIn: auth.expires_in_token,
        });

        return token;
    }
}

export { AuthenticateClientUseCase };
