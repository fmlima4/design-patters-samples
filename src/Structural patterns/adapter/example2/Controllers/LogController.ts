import { Request, Response } from 'express';
import { Logger } from '../interfaces/Logger';
import { FileLoggerAdapter } from '../adapters/FileLoggerAdapter';
import { ConsoleLogger } from '../Sevices/ConsoleLogger';

class LogController {
    static log(req: Request, res: Response) {
        const useAdapter = req.query.useAdapter
        const { message } = req.body;

        if(useAdapter === 'true'){
            const logger: Logger = new FileLoggerAdapter();
            
            try {
                logger.log(message);
                res.json({ Logger: 'Adapter' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
            }
        } else {
            const loggerDefault: Logger = new ConsoleLogger();
            loggerDefault.log(message);
            res.json({ Logger: 'default' });
        }
    }
}

export { LogController };
