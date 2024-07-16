/* // middleware/authenticateJWT.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user; // Attach user information to the request object
      next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};
 */