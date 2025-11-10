export default function ActionButtons() {
  return (
    <div className="flex gap-4 justify-start mt-4">
      <button className="px-10 py-2 bg-black text-white rounded hover:bg-gray-800 cursor-pointer">
        Send to Repair
      </button>
      <button className="px-20 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 cursor-pointer">
        Ready to Assemble
      </button>
    </div>
  );
}
