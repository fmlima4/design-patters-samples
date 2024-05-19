import { Request, Response } from 'express';
import { PaymentProcessor } from '../templates/PaymentProcessor';
import { CreditCardPaymentProcessor } from '../templates/CreditCardPaymentProcessor';
import { PayPalPaymentProcessor } from '../templates/PayPalPaymentProcessor';

class PaymentController {
    async processPayment(req: Request, res: Response): Promise<void> {
        const { amount, method } = req.body;

        if (!amount || !method) {
            res.status(400).json({ error: 'Amount and payment method are required' });
            return;
        }

        let paymentProcessor: PaymentProcessor;

        switch (method) {
            case 'credit_card':
                paymentProcessor = new CreditCardPaymentProcessor();
                break;
            case 'paypal':
                paymentProcessor = new PayPalPaymentProcessor();
                break;
            default:
                res.status(400).json({ error: 'Unsupported payment method' });
                return;
        }

        paymentProcessor.processPayment(amount);
        res.status(200).json({ message: 'Payment processed successfully' });
    }
}

export { PaymentController };
