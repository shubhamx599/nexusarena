// src/components/sections/Games.jsx
import { gamesData } from '../../data/games.data'

const Games = () => {
  return (
    <section className="py-20 bg-dark relative overflow-hidden" id="games">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gradient font-orbitron mb-6">
            POPULAR GAMES
          </h2>
          <p className="text-xl text-light/80 max-w-2xl mx-auto font-montserrat">
            Choose from our extensive library of competitive games and dominate the arena.
          </p>
        </div>

        {/* Games Grid */}
        <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        cursor-invert="true">
          {gamesData.map((game) => (
            <div 
              key={game.id}
              className="bg-glass rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border border-white/5 hover:border-primary/30"
            >
              {/* Game Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>
                
                {/* Players Badge */}
                <div className="absolute top-3 right-3 bg-darker/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs text-primary font-bold">{game.players}</span>
                </div>
              </div>

              {/* Game Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-primary transition-colors">
                  {game.title}
                </h3>
                
                {/* Description */}
                <p className="text-light/70 text-sm mb-4 font-montserrat leading-relaxed">
                  {game.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tournament Info */}
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div className="text-xs text-light/60 font-montserrat">
                    {game.tournaments} tournaments
                  </div>
                  <button className="text-xs bg-gradient-to-r from-primary to-secondary text-darker px-3 py-1 rounded-full font-bold hover:scale-105 transition-transform">
                    PLAY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Games */}
        <div className="text-center mt-12">
          <button className="btn btn-secondary text-lg px-8 py-4 font-montserrat">
            View All Games
          </button>
        </div>
      </div>
    </section>
  )
}

export default Games