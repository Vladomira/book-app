import { makeStyles } from "@material-ui/core";

export const useStylesNotes = makeStyles(() => ({
   notesSlide: {
      wordWrap: "break-word",
      width: "190px",

      boxShadow: "5px 3px 5px 1px rgba(0,0,0,0.56)",
      backgroundColor: "#FAEBE2",
      padding: "15px 13px",
      borderRadius: "10px",
   },
   textBox: {
      color: "#400105",
      marginBottom: "35px",
   },
   title: {
      color: "#80010B",
      fontWeight: "600",
      marginBottom: "8px",
      fontSize: "15px",
   },
   chapter: {
      fontWeight: "600",
      marginBottom: "10px",
   },
   dateBox: {
      fontSize: "12px",
      color: "#400105",
      marginBottom: "15px",
   },
   dateTextBox: {
      display: "flex",

      "&:not(:last-child)": { marginBottom: "5px" },
   },
   date: {
      fontWeight: "600",
      marginLeft: "37px",
   },
}));
