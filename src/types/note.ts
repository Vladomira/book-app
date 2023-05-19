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
