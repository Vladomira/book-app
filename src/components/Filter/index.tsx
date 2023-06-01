import { FC, SyntheticEvent } from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import { FiltredType } from "../../types/filter";
import { useStylesFilter } from "./Filter.style";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

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
   const handleClear = () => setQuery("");

   return (
      <>
         <form
            autoComplete="off"
            // onSubmit={handleSubmit}
            className={classes.form}
         >
            <TextField
               variant="outlined"
               placeholder="Search"
               name="search"
               value={query}
               InputProps={{
                  startAdornment: <SearchIcon />,
                  endAdornment: (
                     <div className={classes.buttonsBox}>
                        <IconButton
                           aria-label="Clear"
                           className={classes.clearButton}
                           onClick={handleClear}
                        >
                           <CloseIcon className={classes.clearIcon} />
                        </IconButton>
                     </div>
                  ),
               }}
               onChange={({ target: { value } }) => setQuery(value)}
               className={classes.input}
            />
         </form>
      </>
   );
};
