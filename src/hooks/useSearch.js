// src/hooks/useSearch.js
import { useState, useEffect } from "react";
import { POPULAR_SEARCHES } from "../constants/search";

export const useSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = POPULAR_SEARCHES.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 4));
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = (e, overrideQuery) => {
    if (e) e.preventDefault();
    const query = overrideQuery !== undefined ? overrideQuery : searchQuery;
    if (query.trim()) {
      console.log("Searching for:", query);
      setIsSearchOpen(false);
      setSearchQuery("");
      setSearchSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSearch(null, suggestion);
  };

  return {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    searchSuggestions,
    handleSearch,
    handleSuggestionClick,
  };
};
