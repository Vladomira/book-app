import { FC } from "react";
import { MyNotesItem } from "./MyNotesItem";
import { SliderComponent } from "../Slider";
import { ReceivedNote } from "../../types/note";

type MyNotesListProps = { notes: ReceivedNote[] };

export const MyNotesList: FC<MyNotesListProps> = ({ notes }) => {
   return (
      <SliderComponent>
         {notes.map((el) => (
            <MyNotesItem key={el.id} note={el} />
         ))}
      </SliderComponent>
   );
};
