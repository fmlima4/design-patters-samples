import { Tank } from "./Tank";

export class RussianTank extends Tank {
    attack(): void {
        console.log('Russian Tank is firing its cannon!');
    }
}
