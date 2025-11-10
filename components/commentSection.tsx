"use client";
import { useState } from "react";

interface Props {
  selectedParts: string[];
}

export default function CommentSection({ selectedParts }: Props) {
  if (!selectedParts.length) return null;

  const [commentForm, setCommentForm] = useState({});

  const handleChange = (id: string, comment: string) => {
    setCommentForm((prev) => {
      const updated: { [key: string]: string } = { ...prev };

      if (!comment) {
        delete updated[id]; // remove if comment is empty
      } else {
        updated[id] = comment; // update if comment has value
      }

      return updated;
    });
  };

  return (
    <div className="bg-gray-100 mt-10 p-4 mb-6">
      <div className="flex gap-5 items-center">
        <h3 className="font-semibold mb-3">Element Part ID</h3>
        <h3 className="font-semibold mb-3">Comments</h3>
      </div>
      <div className="space-y-3">
        {selectedParts.map((id) => (
          <div key={id} className="flex gap-7 items-center">
            <span className="w-24 font-medium">{id}</span>
            <input
              type="text"
              placeholder="Write your comment"
              className="flex-1 border border-gray-300 bg-white rounded px-2 py-1 text-sm"
              onChange={(e) => handleChange(id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
