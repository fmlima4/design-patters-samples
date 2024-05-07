import fs from 'fs';

class LoggerService {
    private static instance: LoggerService;
    private logFilePath: string = 'logs.txt';

    private constructor() {}

    public static getInstance(): LoggerService {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService();
        }
        return LoggerService.instance;
    }

    public log(message: string): void {
        const formattedMessage = `${new Date().toISOString()}: ${message}\n`;
        fs.appendFileSync(this.logFilePath, formattedMessage);
    }
}

export { LoggerService };
