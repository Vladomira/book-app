import { FC, SyntheticEvent } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import { FiltredType } from "../../types/filter";
import { useStylesFilter } from "./Filter.style";

export const FiltredBlock: FC<FiltredType> = ({
   query,
   setSearchParams,
   setQuery,
}) => {
   const classes = useStylesFilter();

   const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      return setSearchParams({ book: query });
   };

   return (
      <>
         <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className={classes.form}
         >
            <TextField
               type="search"
               variant="outlined"
               placeholder="Search"
               name="search"
               value={query}
               InputProps={{
                  endAdornment: <SearchIcon />,
               }}
               onChange={({ target: { value } }) => setQuery(value)}
               className={classes.input}
            />
         </form>
      </>
   );
};
