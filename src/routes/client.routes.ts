import { Router } from "express";

import { CreateClientController } from "../modules/clients/use-cases/create-client/CreateClientController";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { FindDeliveriesByClientController } from "../modules/clients/use-cases/find-deliveries-by-client/FindDeliveriesByClientController";
import { AuthenticateClientController } from "../modules/accounts/use-cases/authenticate-client/AuthenticateClientController";

const clientRoutes = Router();

// Create a new client
clientRoutes.post("/", new CreateClientController().handle);

// Authenticate client in app
clientRoutes.post("/authenticate", new AuthenticateClientController().handle);

// Find deliveries by client
clientRoutes.get(
    "/deliveries",
    ensureAuthenticateClient,
    new FindDeliveriesByClientController().handle
);

export { clientRoutes };
