import { Request, Response } from 'express';


class AdapterController {
    async adapterExample1(req: Request, res: Response) {
        try {
    
          
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while processing the request.' });
        }
    }

    async adapterExample2(req: Request, res: Response) {
        try {
    
          
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while processing the request.' });
        }
    }
}

export default new AdapterController();
