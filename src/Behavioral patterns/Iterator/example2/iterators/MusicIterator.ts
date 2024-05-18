import { Music } from '../models/Music';
import { Iterator } from './Iterator';

export class MusicIterator implements Iterator<Music> {
    private index: number = 0;

    constructor(private musicCollection: Music[]) {}

    next(): Music | null {
        if (this.hasNext()) {
            return this.musicCollection[this.index++];
        }
        return null;
    }

    hasNext(): boolean {
        return this.index < this.musicCollection.length;
    }
}
