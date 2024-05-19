import { PaymentProcessor } from './PaymentProcessor';

export class CreditCardPaymentProcessor extends PaymentProcessor {
    protected validatePaymentDetails(): void {
        console.log('Validating credit card details...');
    }

    protected debitAmount(amount: number): void {
        console.log(`Debiting ${amount} from credit card...`);
    }
}
