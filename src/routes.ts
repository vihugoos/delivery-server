import { Router } from "express";
import { CreateClientController } from "./modules/clients/use-cases/create-client/CreateClientController";

const routes = Router();

routes.post("/client", new CreateClientController().handle);

export { routes };
