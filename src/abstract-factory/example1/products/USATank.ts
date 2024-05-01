import { Tank } from "./Tank";

export class USATank extends Tank {
    attack(): void {
        console.log('USA Tank is firing its cannon!');
    }
}
