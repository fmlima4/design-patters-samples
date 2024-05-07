class Message {
    constructor(private sender: string, private recipient: string, private content: string) {}

    getSender(): string {
        return this.sender;
    }

    getRecipient(): string {
        return this.recipient;
    }

    getContent(): string {
        return this.content;
    }
}

export { Message };
