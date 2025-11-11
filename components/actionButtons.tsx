import { useDisassemblyStore } from "@/store/disassemblyStore";
import { useModalStore } from "@/store/modalStore";

export default function ActionButtons() {
  const { openModal } = useModalStore();
  const { selectedParts, confirmDisassembly } = useDisassemblyStore();

  return (
    <div className="flex gap-4 justify-start items-end mt-10">
      <button
        className="px-10 py-2 bg-black text-white rounded hover:bg-gray-800 cursor-pointer"
        onClick={() =>
          openModal({
            title: "Confirm Status",
            content: (
              <p>
                Update status of Element Part ID{" "}
                <strong>{selectedParts.join(", ")}</strong> to{" "}
                <span>
                  "Ready for Repair"
                </span>
              </p>
            ),
            onConfirm: () => confirmDisassembly("Ready for Repair"),
            onCancel: () => console.log("Cancelled"),
          })
        }
      >
        Send to Repair
      </button>
      <button
        className="px-20 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 cursor-pointer"
        onClick={() =>
          openModal({
            title: "Confirm Status",
            content: (
              <p>
                Update status of Element Part ID{" "}
                <strong>{selectedParts.join(", ")}</strong> to{" "}
                <span >
                  "Ready for Assembly"
                </span>
              </p>
            ),
            onConfirm: () => confirmDisassembly("Ready for Assemble"),
            onCancel: () => console.log("Cancelled"),
          })
        }
      >
        Ready to Assemble
      </button>
    </div>
  );
}
