import { MessageSender } from '../interfaces/MessageSender';

class PushNotificationSender implements MessageSender {
    send(message: string): void {
        console.log(`Enviando notificação push: ${message}`);
    }
}

export { PushNotificationSender };
