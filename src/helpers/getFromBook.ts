import { BooksType } from "../types/book";

export const getImage = (el: BooksType) =>
   el?.volumeInfo?.imageLinks?.smallThumbnail ||
   el?.volumeInfo?.imageLinks?.thumbnail ||
   "";
export const getAuthor = (el: BooksType) =>
   el.volumeInfo.authors?.length > 0 ? el.volumeInfo.authors[0] : "";
