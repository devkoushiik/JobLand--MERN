import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { verifyJWT } from "../utils/jwt.utils.js";

const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === "672ee409e1c93c23e8bd7ccd";
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError("Demo User. Read Only!");
  next();
};

export default authenticateUser;
