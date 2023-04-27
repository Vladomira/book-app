import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const NotesPage = () => {
   const { signOut } = useAuth();
   const navigate = useNavigate();

   return (
      <>
         <h1>Notespage</h1>

         <button
            type="button"
            onClick={() => signOut(() => navigate("/", { replace: true }))}
         >
            Log out
         </button>
      </>
   );
};
