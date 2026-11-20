import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed top-6 right-6 z-[80] inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-black/70"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
