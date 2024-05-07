import { Message } from '../entities/Message';

class MessagingService {
    sendMessage(message: Message): boolean {
        // Simula o envio de uma mensagem
        console.log(`Message sent from ${message.getSender()} to ${message.getRecipient()}: ${message.getContent()}`);
        return true;
    }
}

export { MessagingService };
