export type NoteFormProps = {
   id: number | null;
};
export type NoteProps = NoteFormProps & {
   text: string;
   chapter: string;
};

export const noteInit: NoteProps = {
   text: "",
   chapter: "",
   id: null,
};
export const NoteReducerState = [noteInit];
export type ReceivedNote = Pick<NoteProps, "chapter" | "text"> & {
   bookId: number;
   createdAt: string;
   id: number;
   updatedAt: string;
   userId: string;
};
