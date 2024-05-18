import { Request, Response } from 'express';
import { MusicCollection } from '../collections/MusicCollection';
import { Music } from '../models/Music';

class MusicController {
    private musicCollection: MusicCollection;

    constructor() {
        this.musicCollection = new MusicCollection();
        // Adding some initial music to the collection
        this.musicCollection.addMusic(new Music('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', 1975));
        this.musicCollection.addMusic(new Music('Stairway to Heaven', 'Led Zeppelin', 'Led Zeppelin IV', 1971));
        this.musicCollection.addMusic(new Music('Imagine', 'John Lennon', 'Imagine', 1971));
    }

    getMusic = (req: Request, res: Response): void => {
        try {
            const iterator = this.musicCollection.getIterator();
            const musicList = [];
            while (iterator.hasNext()) {
                musicList.push(iterator.next());
            }
            res.status(200).json(musicList);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
        }
    }
}

export { MusicController };
