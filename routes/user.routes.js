import { Router } from "express";
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controllers/user.controller.js";
import {
  authorizePermissions,
  checkForTestUser,
} from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multerMiddleware.js";
import { validateUpdateUserInput } from "../middlewares/validationMiddleware.js";

router.get("/current-user", getCurrentUser);
router.get(
  "/admin/app-stats",
  authorizePermissions("admin"),
  getApplicationStats
);
router.patch(
  "/update-user",
  checkForTestUser,
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);
export default router;
