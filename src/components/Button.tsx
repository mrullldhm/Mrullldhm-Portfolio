import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
export default function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 px-8 py-3 bg-neutral-950 text-white border border-neutral-950 rounded-lg outline-none transition-all focus:scale-105 hover:bg-white hover:text-neutral-950 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-current"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}
