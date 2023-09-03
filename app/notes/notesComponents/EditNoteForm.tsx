'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, contents }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newContents, setNewContents] = useState(contents);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newContents }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/notes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewContents(e.target.value)}
        value={newContents}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Note Contents"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Note
      </button>
    </form>
  );
}