import { Animal, Cachorro, Gato, Pato } from "./Animal";

export class AnimalFactory {
    createAnimal(type: string): Animal {
        let animal: Animal;

        switch(type) {
            case 'dog':
                animal = new Cachorro();
                break;
            case 'cat':
                animal = new Gato();
                break;
            case 'duck':
                animal = new Pato();
                break;
            default:
                throw new Error('Animal type not supported.');
        }

        return animal;
    }
}
