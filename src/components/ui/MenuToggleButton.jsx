// src/components/ui/MenuToggleButton.jsx
import { RiMenuLine, RiCloseLine } from "@remixicon/react";

const MenuToggleButton = ({ isOpen, onClick }) => {
  return (
    <button
      className="relative p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300 group gaming-menu-btn"
      onClick={onClick}
    >
      <div className="relative w-6 h-6">
        {/* Hamburger Icon */}
        <RiMenuLine
          className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ${
            isOpen
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />

        {/* Cross Icon */}
        <RiCloseLine
          className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ${
            isOpen
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default MenuToggleButton;
