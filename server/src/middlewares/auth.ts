import { Response, NextFunction } from 'express'
import { verifyToken } from '../helpers';

export const IsAuth = (req: any, _res: Response, next: NextFunction) => {
    try {
        const authHeader: string = req.get("Authorization");
        if (authHeader) {
            const accessToken = authHeader.split(" ")[1];
            
            if (accessToken) {
                const user = verifyToken(accessToken);
               
                if (user) {
                    req.user = user;
                    req.isAuth = true
                    next()
                }
                else {
                    const error: any = new Error("Unathenticated User");
                    error.statusCode = 401;
                    throw error;
                }
            }
            else {
                const error: any = new Error("Unathenticated User");
                error.statusCode = 401;
                throw error;
            }
        }
        else {
            const error: any = new Error("Unathenticated User");
            error.statusCode = 401;
            throw error;
        }


    } catch (error: any) {
        if (!error.statusCode) error.statusCode = 500;
        next(error)
    }
}