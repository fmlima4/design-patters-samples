interface DocumentPrototype {
    clone(): DocumentPrototype;
    getInfo(): string;
}

class Document implements DocumentPrototype {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    clone(): DocumentPrototype {
        return new Document(this.content);
    }

    getInfo(): string {
        return `Document content: ${this.content}`;
    }
}

export { DocumentPrototype, Document };
