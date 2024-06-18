import { ICON_SIZE } from "@/config";
import { TbLocationQuestion } from "react-icons/tb";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <TbLocationQuestion size={ICON_SIZE.EXTRA_LARGE} />
      <p>Ops! I don&apos;t remember making this page...</p>
    </div>
  );
}
