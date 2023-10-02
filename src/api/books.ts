const url = "https://www.googleapis.com/books/v1/volumes";
const configUrl = "&country=IN&langRestrict=en";

export const fetchBooks = async (
   query: string,
   limit: number | null,
   offset: number | null
) => {
   const reqQuery = query.split(" ").join("+") || "hardcover+fiction";
   const res = await fetch(
      `${url}?q=${reqQuery}&maxResults=${limit}&startIndex=${offset}${configUrl}`
   );

   return await res.json();
};

export const fetchById = async (id: string | undefined) => {
   if (!id) {
      throw new Error("Invalid ID");
   }

   const res = await fetch(`${url}/${id}`);

   if (!res.ok) {
      throw new Error("Failed to fetch data");
   }

   return res.json();
};
