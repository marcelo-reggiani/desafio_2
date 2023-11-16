import { Router } from "express";
import { CreateEventController, ListEventController } from "./controllers/CreateEventController";
import { CreateCategoryController, ListCategoryController } from "./controllers/CategoryController";
import { CreatePlaceController, ListPlaceController } from "./controllers/PlaceController";

const router = Router();

const createEvent = new CreateEventController();
router.post("/event", createEvent.handle);

const listEvent = new ListEventController();
router.get("/list", listEvent.handle);

const createCategory = new CreateCategoryController();
router.post("/category", createCategory.handle);

const listCategory = new ListCategoryController();
router.get("/listCategory", listCategory.handle);

const createPlace = new CreatePlaceController();
router.post("/place", createPlace.handle);

const listPlace = new ListPlaceController();
router.get("/listPlace", listPlace.handle);

export { router };
 