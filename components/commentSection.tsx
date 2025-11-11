"use client";
import { useDisassemblyStore } from "@/store/disassemblyStore";

export default function CommentSection() {
  const { selectedParts, comments, updateComment } = useDisassemblyStore();
  
  if (!selectedParts.length) return null;

  return (
    <div className="bg-gray-100 mt-10 px-4 pt-4">
      <div className="flex gap-5 items-center">
        <h3 className="font-semibold mb-3">Element Part ID</h3>
        <h3 className="font-semibold mb-3">Comments</h3>
      </div>
      <div className="space-y-3 overflow-auto pb-5 ">
        {selectedParts.map((id) => (
          <div key={id} className="flex gap-7 items-center ">
            <span className="w-24 font-medium">{id}</span>
            <input
              type="text"
              value={comments[id] || ""}
              placeholder="Write your comment"
              className="flex-1 border border-gray-300 bg-white rounded px-2 py-1 text-sm"
              onChange={(e) => updateComment(id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
