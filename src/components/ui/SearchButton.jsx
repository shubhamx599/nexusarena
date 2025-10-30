import { RiSearchLine } from '@remixicon/react';

const SearchButton = ({ onClick, mobile = false }) => {
  if (mobile) {
    return (
      <button
        onClick={onClick}
        className="relative p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300 group"
      >
        <RiSearchLine className="w-6 h-6" />
        <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="relative p-3 rounded-xl bg-white/5 border border-white/10 text-light/80 hover:text-primary hover:border-primary/30 transition-all duration-300 group gaming-btn"
    >
      <RiSearchLine className="w-5 h-5" />
      <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default SearchButton;