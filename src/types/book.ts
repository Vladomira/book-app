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
