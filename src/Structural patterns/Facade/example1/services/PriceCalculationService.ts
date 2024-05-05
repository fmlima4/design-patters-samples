import { Item } from '../entities/Item';

class PriceCalculationService {
    calculateTotalPrice(items: Item[]): number {
        // Calcula o preço total dos itens no pedido
        return items.reduce((total, item) => total + item.getPrice(), 0);
    }
}

export { PriceCalculationService };
