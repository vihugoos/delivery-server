import { prisma } from "../../../../database/prisma-client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

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
            throw new Error("Username or password invalid!");
        }

        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) {
            throw new Error("Username or password invalid!");
        }

        const token = sign({ username }, "66a0ce34cce7748d49d01c8ebb1b132c", {
            subject: client.id,
            expiresIn: "1d",
        });

        return token;
    }
}

export { AuthenticateClientUseCase };
