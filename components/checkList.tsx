import { checklist_items } from "@/data/data";

interface Props {
  checklistSelected: string[];
  setChecklistSelected: (list: string[]) => void;
}

export default function Checklist({
  checklistSelected,
  setChecklistSelected,
}: Props) {
  const toggle = (id: string) => {
    setChecklistSelected([...checklistSelected, id]);
  };

  const clear = () => {
    setChecklistSelected([]);
  };

  return (
    <div >
      <div className="flex gap-10 items-center mb-4">
        <div className="flex gap-2 items-center">
            <h3 className="font-semibold">Disassembly Checklist</h3>
            {checklistSelected.length > 0 &&<p className="h-4 w-4 text-center text-xs bg-gray-200 rounded-full">{checklistSelected.length}</p>}
        </div>
        <button
          onClick={clear}
          className="text-sm cursor-pointer border-b hover:text-gray-400"
        >
          Clear Selection
        </button>
      </div>
      <div className="flex flex-wrap gap-2 ">
        {checklist_items.map((item: any) => (
          <button
            key={item}
            onClick={() => toggle(item)}
            className={`px-3 py-1 border rounded-full text-sm cursor-pointer transition ${
              checklistSelected.includes(item)
                ? "border-orange-500 bg-orange-50 text-orange-700"
                : "border-gray-300 text-gray-600 hover:border-gray-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
