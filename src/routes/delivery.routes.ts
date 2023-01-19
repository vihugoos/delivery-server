import { Router } from "express";

import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { CreateDeliveryController } from "../modules/deliveries/use-cases/create-delivery/CreateDeliveryController";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { FindAllAvailableController } from "../modules/deliveries/use-cases/find-all-available/FindAllAvailableController";
import { UpdateDeliverymanController } from "../modules/deliveries/use-cases/update-deliveryman/UpdateDeliverymanController";
import { CloseDeliveryController } from "../modules/deliveries/use-cases/close-delivery/CloseDeliveryController";

const deliveryRoutes = Router();

// Create a new delivery
deliveryRoutes.post(
    "/",
    ensureAuthenticateClient,
    new CreateDeliveryController().handle
);

// Find all available deliveries
deliveryRoutes.get(
    "/available",
    ensureAuthenticateDeliveryman,
    new FindAllAvailableController().handle
);

// Update the deliveryman on delivery
deliveryRoutes.put(
    "/update-deliveryman/:id",
    ensureAuthenticateDeliveryman,
    new UpdateDeliverymanController().handle
);

// Close delivery
deliveryRoutes.put(
    "/close/:id",
    ensureAuthenticateDeliveryman,
    new CloseDeliveryController().handle
);

export { deliveryRoutes };
