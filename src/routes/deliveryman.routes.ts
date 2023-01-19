import { Router } from "express";

import { CreateDeliverymanController } from "../modules/deliveryman/use-cases/create-deliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "../modules/accounts/use-cases/authenticate-deliveryman/AuthenticateDeliveryController";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { FindDeliveriesByDeliverymanController } from "../modules/deliveryman/use-cases/find-deliveries-by-deliveryman/FindDeliveriesByDeliverymanController";

const deliverymanRoutes = Router();

// Create a new deliveryman
deliverymanRoutes.post("/", new CreateDeliverymanController().handle);

// Authenticate deliveryman in app
deliverymanRoutes.post(
    "/authenticate",
    new AuthenticateDeliverymanController().handle
);

// Find deliveries by deliveryman
deliverymanRoutes.get(
    "/deliveries",
    ensureAuthenticateDeliveryman,
    new FindDeliveriesByDeliverymanController().handle
);

export { deliverymanRoutes };
