import { ChevronUp } from "lucide-react";

type BackToTopButtonProps = {
  show: boolean;
  onClick: () => void;
};

export default function BackToTopButton({
  show,
  onClick,
}: BackToTopButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed cursor-pointer bottom-8 right-8 z-48 p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg transition-all duration-300 transform ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ChevronUp size={24} />
    </button>
  );
}

