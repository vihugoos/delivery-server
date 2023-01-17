import { Router } from "express";
import { CreateClientController } from "./modules/clients/use-cases/create-client/CreateClientController";
import { AuthenticateClientController } from "./modules/accounts/use-cases/authenticate-client/AuthenticateClientController";

const routes = Router();

routes.post("/client", new CreateClientController().handle);

routes.post("/authenticate", new AuthenticateClientController().handle);

export { routes };
