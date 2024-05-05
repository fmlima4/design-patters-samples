import { Request, Response } from 'express';
import { Item } from '../entities/Item';
import { Order } from '../entities/Order';
import { InventoryService } from '../services/InventoryService';
import { PriceCalculationService } from '../services/PriceCalculationService';

class OrderController {
    static placeOrder(req: Request, res: Response) {
        const order: Order = new Order();
        const items: any[] = req.body.items; // Alteração aqui para receber qualquer tipo de item

        const inventoryService: InventoryService = new InventoryService();
        const priceCalculationService: PriceCalculationService = new PriceCalculationService();

        for (const itemData of items) {
            const item: Item = new Item(itemData.name, itemData.price); // Criando instância de Item
            if (!inventoryService.checkAvailability(item)) {
                return res.status(400).json({ error: `${item.getName()} is not available` });
            }
            order.addItem(item);
        }

        const totalPrice: number = priceCalculationService.calculateTotalPrice(order.getItems());

        return res.status(200).json({ message: 'Order placed successfully', totalPrice });
    }
}

export { OrderController };
