const url = "https://www.googleapis.com/books/v1/volumes?";
const configUrl = "&country=IN&langRestrict=en";
const ApiKey = "AIzaSyDyOmRZlMhsG5lRQl5Xb4ObRxZ0hY5uaOU";

export const fetchBooks = async (
   query: string,
   limit: number | null,
   offset: number | null
) => {
   const reqQuery = query.split(" ").join("+") || "hardcover+fiction";
   const res = await fetch(
      `${url}q=${reqQuery}&maxResults=${limit}&startIndex=${offset}${configUrl}`
   );

   return await res.json();
};

export const fetchById = async (id: string | undefined) => {
   const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}  `
   );

   return await res.json();
};
