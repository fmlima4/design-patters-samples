import { Request, Response } from 'express';
import { LoggerService } from '../services/LoggerService';

class LogControllerSingleton {
    static logMessage(req: Request, res: Response) {
        const message: string = req.body.message;

        const loggerService = LoggerService.getInstance();
        loggerService.log(message);

        return res.status(200).json({ message: 'Log entry added successfully' });
    }
}

export { LogControllerSingleton };
