interface Reader {
    openBook(book: string): void;
    displayPage(page: number): void;
}

export { Reader };
