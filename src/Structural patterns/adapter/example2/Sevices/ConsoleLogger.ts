import { Logger } from '../interfaces/Logger';

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

export { ConsoleLogger };
