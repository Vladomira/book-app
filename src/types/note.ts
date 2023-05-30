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
export type ReceivedNote = {
   bookId: number;
   chapter: string;
   createdAt: string;
   id: number;
   text: string;
   updatedAt: string;
   userId: string;
};
