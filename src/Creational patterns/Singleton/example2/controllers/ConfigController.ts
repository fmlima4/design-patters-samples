import { Request, Response } from 'express';
import { ConfigManager } from '../singletons/ConfigManager';

class ConfigController {
    static async setConfig(req: Request, res: Response): Promise<void> {
        const { key, value } = req.body;

        if (!key || value === undefined) {
            res.status(400).json({ error: 'Key and value are required' });
            return;
        }

        const configManager = ConfigManager.getInstance();
        configManager.setConfig(key, value);
        res.status(200).json({ message: 'Configuration set successfully' });
    }

    static async getConfig(req: Request, res: Response): Promise<void> {
        const { key } = req.params;

        if (!key) {
            res.status(400).json({ error: 'Key is required' });
            return;
        }

        const configManager = ConfigManager.getInstance();
        const value = configManager.getConfig(key);
        res.status(200).json({ key, value });
    }
}

export { ConfigController };
