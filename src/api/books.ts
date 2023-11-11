const url = "https://www.googleapis.com/books/v1/volumes";
const key = process.env.REACT_APP_API_KEY;
const configUrl = `&country=IN&langRestrict=en&key=${key}`;
const headers = {
   "Accept-Encoding": "gzip",
   "User-Agent": "my program (gzip)",
};
export const fetchBooks = async (
   query: string,
   limit: number | null,
   offset: number | null
) => {
   try {
      const reqQuery = query.split(" ").join("+") || "hardcover+fiction";

      const res = await fetch(
         `${url}?q=${reqQuery}&maxResults=${limit}&startIndex=${offset}${configUrl}`,
         { headers }
      );
      if (!res.ok) {
         throw new Error(`HTTP Error: ${res.status} - ${res.statusText}`);
      }

      return await res.json();
   } catch (error) {
      throw error;
   }
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
