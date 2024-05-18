import { Music } from '../models/Music';
import { MusicIterator } from '../iterators/MusicIterator';

export class MusicCollection {
    private musicCollection: Music[] = [];

    addMusic(music: Music): void {
        this.musicCollection.push(music);
    }

    getIterator(): MusicIterator {
        return new MusicIterator(this.musicCollection);
    }

    getMusicCollection(): Music[] {
        return this.musicCollection;
    }
}
