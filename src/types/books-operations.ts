export type AddBookBody = {
   favorite: boolean;
   finished: boolean;
   inProgress: boolean;
   author: string;
   title: string;
   image: string;
};

export type AddBookProps = {
   book: AddBookBody;
   bookId: string;
};

export type BookWithId = AddBookBody & { bookId: string | null };
export type InitBookState = BookWithId[];

export const initBook: BookWithId = {
   bookId: null,
   favorite: false,
   finished: false,
   inProgress: false,
   author: "",
   title: "",
   image: "",
};

export const booksInitState: InitBookState = [initBook];
