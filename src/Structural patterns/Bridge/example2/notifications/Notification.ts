import { MessageSender } from '../interfaces/MessageSender';

class Notification {
    private sender: MessageSender;

    constructor(sender: MessageSender) {
        this.sender = sender;
    }

    send(message: string): void {
        this.sender.send(message);
    }
}

export { Notification };
