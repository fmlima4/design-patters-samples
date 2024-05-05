import { Item } from '../entities/Item';

class InventoryService {
    checkAvailability(item: Item): boolean {
        // Verifica a disponibilidade do item no estoque
        return true; // Simplesmente retornando verdadeiro para fins de exemplo
    }
}

export { InventoryService };
