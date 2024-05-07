import { Request, Response } from 'express';
import { Message } from '../entities/Message';
import { UserService } from '../services/UserService';
import { MessagingService } from '../services/MessagingService';

class MessageController {
    static sendMessage(req: Request, res: Response) {
        const sender: string = req.body.sender;
        const recipient: string = req.body.recipient;
        const content: string = req.body.content;

        const userService: UserService = new UserService();
        const messagingService: MessagingService = new MessagingService();

        const senderName: string = userService.getUserByEmail(sender);
        const recipientName: string = userService.getUserByEmail(recipient);

        const message: Message = new Message(senderName, recipientName, content);

        const success: boolean = messagingService.sendMessage(message);

        if (success) {
            return res.status(200).json({ message: 'Message sent successfully' });
        } else {
            return res.status(500).json({ error: 'Failed to send message' });
        }
    }
}

export { MessageController };
