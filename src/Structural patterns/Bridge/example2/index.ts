import { Request, Response } from 'express';
import { EmailSender } from './implementations/EmailSender';
import { SmsSender } from './implementations/SmsSender';
import { PushNotificationSender } from './implementations/PushNotificationSender';
import { Notification } from './notifications/Notification';

class NotificationController {
    static sendNotification(req: Request, res: Response) {
        const { message } = req.body;
        const { type } = req.params;
        console.log(type)
        let sender;
        switch (type) {
            case 'email':
                sender = new EmailSender();
                break;
            case 'sms':
                sender = new SmsSender();
                break;
            case 'push':
                sender = new PushNotificationSender();
                break;
            default:
                return res.status(400).json({ success: false, message: 'Tipo de notificação inválido' });
        }

        const notification = new Notification(sender);
        notification.send(message);

        return res.status(200).json({ success: true, message: `${type.toUpperCase()} enviado com sucesso!` });
    }
}

export { NotificationController };
