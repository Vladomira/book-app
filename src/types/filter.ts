export type FiltredType = {
   setSearchParams: (prop: { book: string } | { author: string }) => void;
   query: string;
   setQuery: (prop: string) => void;
};
