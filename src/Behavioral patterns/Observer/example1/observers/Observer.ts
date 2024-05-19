import { Notification } from '../models/Notification';

export interface Observer {
    update(notification: Notification): void;
    getId(): number;
}
