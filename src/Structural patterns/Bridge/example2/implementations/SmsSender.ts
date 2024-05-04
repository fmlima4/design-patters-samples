import { MessageSender } from '../interfaces/MessageSender';

class SmsSender implements MessageSender {
    send(message: string): void {
        console.log(`Enviando SMS: ${message}`);
    }
}

export { SmsSender };
