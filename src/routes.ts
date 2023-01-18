import { Router } from "express";
import { CreateClientController } from "./modules/clients/use-cases/create-client/CreateClientController";
import { AuthenticateClientController } from "./modules/accounts/use-cases/authenticate-client/AuthenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/use-cases/create-deliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/accounts/use-cases/authenticate-deliveryman/AuthenticateDeliveryController";
import { CreateDeliveryController } from "./modules/deliveries/use-cases/create-delivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { FindAllAvailableController } from "./modules/deliveries/use-cases/find-all-available/FindAllAvailableController";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { UpdateDeliverymanController } from "./modules/deliveries/use-cases/update-deliveryman/UpdateDeliverymanController";

const routes = Router();

// Create a new client
routes.post("/client", new CreateClientController().handle);

// Authenticate client in app
routes.post("/client/authenticate", new AuthenticateClientController().handle);

// Create a new delivery
routes.post("/deliveryman", new CreateDeliverymanController().handle);

// Authenticate deliveryman in app
routes.post(
    "/deliveryman/authenticate",
    new AuthenticateDeliverymanController().handle
);

// Create a new delivery
routes.post(
    "/delivery",
    ensureAuthenticateClient,
    new CreateDeliveryController().handle
);

// Find all available deliveries
routes.get(
    "/delivery/available",
    ensureAuthenticateDeliveryman,
    new FindAllAvailableController().handle
);

// Update the deliveryman on delivery
routes.put(
    "/delivery/update-deliveryman/:id",
    ensureAuthenticateDeliveryman,
    new UpdateDeliverymanController().handle
);

export { routes };
