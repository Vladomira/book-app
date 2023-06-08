export const getDate = (date: string) => new Date(date).toString().slice(3, 21);

export const chageFormat = (data: string) => {
   const date = new Date(data);
   const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
   );
   const day = date.getDate();
   const year = date.getFullYear();

   return `${month} ${day}, ${year}`;
};
