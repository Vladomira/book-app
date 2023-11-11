import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookInfo } from "../components/BookPageInfo";
import { PageNav } from "../components/PageNav";
import { fetchById } from "../api/books";
import { BooksType, initialBook } from "../types/book";

export const BookPage: FC = () => {
   const [data, setData] = useState<BooksType>(initialBook);
   const { id } = useParams();

   const fetchData = async () => {
      try {
         const data = await fetchById(id);
         setData(data);
      } catch (error) {
         console.error("Error fetching data by ID:", error);
      }
   };
   useEffect(() => {
      fetchData();
   }, [id]);

   return (
      <>
         <PageNav />
         <BookInfo book={data} />
      </>
   );
};
