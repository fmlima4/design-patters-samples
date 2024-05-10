interface ReportPrototype {
    clone(): ReportPrototype;
    generate(): string;
}

class Report implements ReportPrototype {
    private title: string;
    private content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    clone(): ReportPrototype {
        return new Report(this.title, this.content);
    }

    generate(): string {
        return `=== ${this.title} ===\n${this.content}`;
    }
}

export { ReportPrototype, Report };
