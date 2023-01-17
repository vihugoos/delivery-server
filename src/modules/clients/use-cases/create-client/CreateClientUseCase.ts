import { prisma } from "../../../../database/prisma-client";
import { hash } from "bcrypt";

interface ICreateClient {
    username: string;
    password: string;
}

class CreateClientUseCase {
    async execute({ username, password }: ICreateClient) {
        const clientExists = await prisma.clients.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive",
                },
            },
        });

        if (clientExists) {
            throw new Error("Client already exists.");
        }

        const hashPassword = await hash(password, 10);

        const client = await prisma.clients.create({
            data: {
                username: username.toLowerCase(),
                password: hashPassword,
            },
        });

        return client;
    }
}

export { CreateClientUseCase };
