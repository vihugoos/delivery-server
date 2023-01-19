import { Request, Response } from "express";

import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

class AuthenticateClientController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const authenticateClientUseCase = new AuthenticateClientUseCase();

        const token = await authenticateClientUseCase.execute({
            username,
            password,
        });

        return response.json({ token });
    }
}

export { AuthenticateClientController };
