import { motion, AnimatePresence } from 'framer-motion';
import { RiSearchLine } from '@remixicon/react';
import { POPULAR_SEARCHES } from '../../constants/search';

const SearchModal = ({ 
  isOpen, 
  onClose, 
  searchQuery, 
  onSearchChange, 
  onSearchSubmit, 
  searchSuggestions, 
  onSuggestionClick 
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-start justify-center pt-32 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="bg-glass/80 rounded-2xl p-6 w-full max-w-md border border-primary/20 shadow-2xl shadow-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gradient font-orbitron">SEARCH ARENA</h3>
              <p className="text-light/60 text-sm font-montserrat">Find games, tournaments & more</p>
            </div>

            <form onSubmit={onSearchSubmit} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={onSearchChange}
                  placeholder="Search games, tournaments..."
                  className="w-full bg-dark/70 border border-primary/30 rounded-xl px-4 pr-12 py-4 text-light focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 font-montserrat"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary hover:text-light transition-colors p-2"
                >
                  <RiSearchLine className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Search Suggestions */}
            {searchSuggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-dark/70 rounded-xl p-3 border border-primary/20"
              >
                <p className="text-light/60 text-sm font-montserrat mb-2 px-1">Popular Searches</p>
                <div className="space-y-1">
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => onSuggestionClick(suggestion)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 text-light/80 hover:text-primary transition-colors duration-200 font-montserrat text-sm flex items-center gap-2"
                    >
                      <RiSearchLine className="w-3 h-3 opacity-60" />
                      {suggestion}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Popular Searches when no query */}
            {searchQuery.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4"
              >
                <p className="text-light/60 text-sm font-montserrat mb-2 text-center">Try searching for:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {POPULAR_SEARCHES.slice(0, 4).map((item, index) => (
                    <button
                      key={index}
                      onClick={() => onSuggestionClick(item)}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-montserrat hover:bg-primary/20 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;