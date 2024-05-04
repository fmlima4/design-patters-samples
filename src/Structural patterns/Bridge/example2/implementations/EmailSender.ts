import { MessageSender } from '../interfaces/MessageSender';

class EmailSender implements MessageSender {
    send(message: string): void {
        console.log(`Enviando e-mail: ${message}`);
    }
}

export { EmailSender };
