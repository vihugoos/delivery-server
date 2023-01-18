import { Router } from "express";
import { CreateClientController } from "./modules/clients/use-cases/create-client/CreateClientController";
import { AuthenticateClientController } from "./modules/accounts/use-cases/authenticate-client/AuthenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/use-cases/create-deliveryman/CreateDeliverymanController";

const routes = Router();

routes.post("/client", new CreateClientController().handle);

routes.post("/authenticate", new AuthenticateClientController().handle);

routes.post("/deliveryman", new CreateDeliverymanController().handle);

export { routes };
