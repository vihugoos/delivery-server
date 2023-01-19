import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { deliverymanRoutes } from "./deliveryman.routes";
import { deliveryRoutes } from "./delivery.routes";

const routers = Router();

routers.use("/client", clientRoutes);

routers.use("/deliveryman", deliverymanRoutes);

routers.use("/delivery", deliveryRoutes);

export { routers };
