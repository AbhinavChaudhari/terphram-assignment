import { Part } from "@/utils/types";

interface Props {
  parts: Part[];
  selectedParts: string[];
  onSelect: (ids: string[]) => void;
  checklistSelected: string[];
}

export default function PartList({
  parts,
  selectedParts,
  onSelect,
  checklistSelected,
}: Props) {
  const toggle = (id: string) => {
    if (selectedParts.includes(id))
      onSelect(selectedParts.filter((p) => p !== id));
    else onSelect([...selectedParts, id]);
  };

  return (
    <div className="min-w-96 py-2 bg-gray-100 flex flex-col gap-2 h-full">
      <div className="grid grid-cols-5 font-semiboldpb-2 mb-2 text-center">
        <span className="col-span-1">Position</span>
        <span className="col-span-2">Element part ID</span>
        <span className="col-span-2">Selected all</span>
      </div>
      {parts.map((p) => (
        <div key={p.id} className="grid grid-cols-5 items-center">
          <span className="text-center col-span-1">{p.position}</span>

          <div className="flex items-center gap-4 w-full col-span-2">
            <input
              type="checkbox"
              checked={selectedParts.includes(p.id)}
              onChange={() => toggle(p.id)}
              className="w-3 h-3 accent-orange-600 cursor-pointer"
            />
            <button
              onClick={() => toggle(p.id)}
              className={`w-20 py-2 border text-center transition cursor-pointer ${
                selectedParts.includes(p.id)
                  ? "bg-orange-600 border-dotted border-white text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {p.id}
            </button>
            {checklistSelected.length > 0 && selectedParts.includes(p.id) && <p className="h-4 w-4 text-xs bg-gray-200 rounded-full text-center">
              {checklistSelected.length}
            </p>}
          </div>
        </div>
      ))}
    </div>
  );
}
