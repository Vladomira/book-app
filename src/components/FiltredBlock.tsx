import { FC, SyntheticEvent } from "react";

type FiltredType = {
   setSearchParams: (prop: { book: string }) => void;
   query: string;
   setQuery: (prop: string) => void;
};
// for books & authors
export const FiltredBlock: FC<FiltredType> = ({
   query,
   setSearchParams,
   setQuery,
}) => {
   const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();

      setSearchParams({ book: query });
   };
   return (
      <>
         <form autoComplete="off" onSubmit={handleSubmit}>
            <input
               type="search"
               name="search"
               value={query}
               onChange={({ target: { value } }) => setQuery(value)}
            />
            <input type="submit" value={"Search"} />
         </form>
      </>
   );
};
