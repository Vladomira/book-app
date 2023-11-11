export type BookVolumeInfo = {
   authors: string[];
   imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
      large: string;
      small: string;
   };

   industryIdentifiers: { type: string; identifier: string }[];
   pageCount: number;
   publishedDate: string;
   publisher: string;
   categories: string[];
   title: string;
   averageRating: number;
   description: string;
};

export type BooksType = {
   id: string;
   volumeInfo: BookVolumeInfo;
   selfLink: string;
   dbId?: number;
};
export const initialBook: BooksType = {
   id: "",
   selfLink: "",
   volumeInfo: {
      authors: [""],
      imageLinks: { smallThumbnail: "", thumbnail: "", large: "", small: "" },
      publishedDate: "",
      pageCount: 0,
      publisher: "",
      categories: [""],
      title: "",
      averageRating: 0,
      description: "",
      industryIdentifiers: [{ type: "", identifier: "" }],
   },
};

export type BooksListPros = {
   books: BooksType[];
   bookQuery: string;
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
   bookId: string | undefined;
};
type Favorite = { favorite: boolean };
type Finished = { finished: boolean };
type InProgress = { inProgress: boolean };
export type PossibleStatus = Favorite | Finished | InProgress;

export type StatusOperation = Favorite & Finished & InProgress;
export type BookWithId = AddBookBody &
   StatusOperation & {
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

export type BookStatusProps = {
   [key: string]: boolean;
};
