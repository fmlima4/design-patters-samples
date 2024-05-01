import { Logger } from '../interfaces/Logger';
import fs from 'fs';

class FileLoggerAdapter implements Logger {
    log(message: string): void {
        fs.writeFileSync('log.txt', message);
    }
}

export { FileLoggerAdapter };
