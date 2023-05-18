export type BooksType = {
   id: string;
   volumeInfo: {
      authors: string[];
      imageLinks: { smallThumbnail: string; thumbnail: string };
      publishedDate: string;
      publisher: string;
      categories: string[];
      title: string;
      averageRating: number;
   };
};
export const initialBook = {
   id: "",
   volumeInfo: {
      authors: [""],
      imageLinks: { smallThumbnail: "", thumbnail: "" },
      publishedDate: "",
      publisher: "",
      categories: [""],
      title: "",
      averageRating: 0,
   },
};

// books-operations
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

export type BookWithId = AddBookBody & {
   bookId: string | null;
   id: number;
};

export const initBook: BookWithId = {
   bookId: null,
   favorite: false,
   finished: false,
   inProgress: false,
   author: "",
   title: "",
   image: "",
   id: 0,
};
export type InitBookState = BookWithId[];
export const booksInitState: InitBookState = [initBook];

// export type BookData = BookWithId & {
//    createdAt: string;
//    image: string;
//    updatedAt: string;
//    userId: string;
// };
