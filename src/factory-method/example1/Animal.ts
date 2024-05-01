export interface Animal {
    tipo: string;
    som: string;
}

export class Cachorro implements Animal {
    tipo = 'dog';
    som = 'Au au!';
}

export class Gato implements Animal {
    tipo = 'cat';
    som = 'Miau!';
}

export class Pato implements Animal {
    tipo = 'duck';
    som = 'Quack!';
}
