import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>();
  const iconSize = 25;
  const style = "cursor-pointer";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevents button from showing wrong icon
  if (!mounted) {
    return null;
  }

  return (
    <div className="ml-3 my-auto">
      {theme === "light" ? (
        <MdOutlineDarkMode
          size={iconSize}
          className={style}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <MdOutlineLightMode
          size={iconSize}
          className={style}
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
