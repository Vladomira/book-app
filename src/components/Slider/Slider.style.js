import { makeStyles } from "@material-ui/core";

export const useStylesCarousel = makeStyles(() => ({
   slider: {
      padding: "0px 12px",

      "& >.slick-list>.slick-track": {
         marginLeft: "0px",
      },
      "& >.slick-list": {
         overflowX: "clip",
         overflowY: "inherit",
      },
      "& .slick-slide": {
         width: "180px !important",
         "&:not(:last-child)": {
            marginRight: "35px !important",
         },
      },
      "& .slick-arrow:before": {
         fontSize: "26px",
         color: "rgb(255, 165, 0) !important",
      },
      "& .slick-disabled:before": {
         opacity: "0.60 !important",
      },
      "& > .slick-dots>.slick-active>button:before": {
         color: "#FF7F50 !important",
         opacity: "1",
      },
      "& >.slick-dots>li>button:before": {
         marginTop: "12px",
         fontSize: "8px",
         opacity: ".6",
         color: "#FF7F50 !important",
      },
   },

   slide: {
      display: "flex !important",
      flexDirection: "column",
      justifyContent: "center",
      width: "190px !important",
      backgroundColor: "#FAEBE2",
      borderRadius: 10,
      overflow: "hidden",
      padding: "0px 0px 20px",
      boxShadow: "5px 3px 5px 1px rgba(0,0,0,0.56)",
   },
   itemImg: {
      width: "100%",
      height: "260px",
      margin: "0 auto",
   },
   bookLink: {
      margin: "10px auto 0px",
      textDecoration: "none",
      padding: "0px 5px",
   },
}));
