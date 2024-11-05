import jwt from "jsonwebtoken";

// Function to create a JWT
export function createJWT(payload) {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return accessToken;
}

// Function to decode a JWT
export function verifyJWT(token) {
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  return decoded;
}
