import { Disassembly } from "@/components/disassembly";
import Title from "@/components/title";

const page = () => {
  return (
    <div className="flex h-screen bg-gray-50 text-sm font-sans flex-col">
      <Title />
      <Disassembly />
    </div>
  );
};

export default page;
