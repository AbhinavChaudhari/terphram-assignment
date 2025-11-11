import { element_ids } from "@/data/data";
import { useDisassemblyStore } from "@/store/disassemblyStore";
import Status from "./status";

export default function PartList() {
  const {
    selectedParts,
    togglePart,
    checklistSelected,
    selectAllParts,
    confirmedDisassemblies,
    selectedElectrolyzer,
  } = useDisassemblyStore();

  // ✅ Get confirmed records for the current electrolyzer
  const entries = confirmedDisassemblies[selectedElectrolyzer!] || [];

  // ✅ Map part IDs to their status + checklist count
  const partInfoMap: Record<
    string,
    { status: string; checklistCount: number }
  > = {};

  for (const entry of entries) {
    for (const id of entry.ids || []) {
      partInfoMap[id] = {
        status: entry.status,
        checklistCount: entry.checklist?.length || 0,
      };
    }
  }

  const isDisabled = (id: string) => !!partInfoMap[id];

  const getClass = (id: string) => {
    if (isDisabled(id))
      return "bg-gray-300 border-dotted border-white opacity-50 cursor-not-allowed";
    if (selectedParts.includes(id))
      return "bg-orange-600 border-dotted border-white text-white cursor-pointer";
    return "bg-gray-200 hover:bg-gray-300 cursor-pointer";
  };

  return (
    <div className="min-w-96 py-2 bg-gray-100 flex flex-col gap-5 overflow-auto h-full">
      <div className="grid grid-cols-5 font-semiboldpb-2 mb-2 text-center">
        <span className="col-span-1">Position</span>
        <span className="col-span-2">Element part ID</span>
        <span className="cursor-pointer ml-auto inline-block border-b-2 border-transparent hover:border-gray-500" onClick={selectAllParts}>
          Select all
        </span>
      </div>
      {element_ids.map((p) => (
        <div key={p.id} className="grid grid-cols-5 items-center">
          <span className="text-center col-span-1">{p.position}</span>

          <div className="flex items-center gap-4 w-full col-span-4">
            <input
              type="checkbox"
              checked={selectedParts.includes(p.id)}
              onChange={() => togglePart(p.id)}
              className="w-3 h-3 accent-orange-600 cursor-pointer"
              disabled={isDisabled(p.id)}
            />
            <button
              onClick={() => togglePart(p.id)}
              disabled={isDisabled(p.id)}
              className={`w-20 py-2 border text-center transition  ${getClass(
                p.id
              )}`}
            >
              {p.id}
            </button>
            {isDisabled(p.id) && (
              <Status id={p.id} partStatusMap={partInfoMap} />
            )}

            {/* ✅ Show checklist count safely */}
            {(() => {
              const partInfo = partInfoMap[p.id];

              // If part was already confirmed, show its stored checklist count
              if (partInfo?.checklistCount > 0) {
                return (
                  <p className="h-4 w-4 text-xs -ml-2.5 bg-gray-200 rounded-full text-center">
                    {partInfo.checklistCount}
                  </p>
                );
              }

              // Else, if part is currently selected (but not confirmed), show current checklist count
              if (
                selectedParts.includes(p.id) &&
                checklistSelected.length > 0
              ) {
                return (
                  <p className="h-4 w-4 text-xs bg-gray-200 rounded-full text-center">
                    {checklistSelected.length}
                  </p>
                );
              }

              return null;
            })()}
          </div>
        </div>
      ))}
    </div>
  );
}
