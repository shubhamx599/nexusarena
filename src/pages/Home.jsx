// src/pages/Home.jsx
import Hero from '../components/sections/Hero';
import { gamesData } from '../data/games.data';
import { tournamentsData } from '../data/tournaments.data';
import { Link } from 'react-router-dom';

const Home = () => {
  // Get first 4 games
  const featuredGames = gamesData.slice(0, 4);
  
  // Get first 3 tournaments
  const featuredTournaments = tournamentsData.slice(0, 3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-darker text-white">
      {/* Hero Section */}
      <Hero />

      {/* Featured Games Teaser */}
      <section className="py-12 sm:py-20 bg-dark relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-36 h-36 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gradient font-orbitron mb-4">
                FEATURED GAMES
              </h2>
              <p className="text-light/70 max-w-xl font-montserrat">
                Discover the most popular arenas and start competing today.
              </p>
            </div>
            <Link
              to="/games"
              className="mt-6 md:mt-0 relative px-6 py-3 bg-white/5 border border-white/10 text-primary font-bold rounded-xl font-orbitron text-sm hover:scale-105 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg"
              cursor-invert="true"
            >
              VIEW ALL GAMES
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" cursor-invert="true">
            {featuredGames.map((game) => (
              <div
                key={game.id}
                className="bg-glass rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border border-white/5 hover:border-primary/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-darker/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs text-primary font-bold">{game.players}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-orbitron mb-2 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-light/60 text-sm font-montserrat mb-4 line-clamp-2">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-white/5 rounded-full text-light/85 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tournaments Teaser */}
      <section className="py-12 sm:py-20 bg-darker relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gradient font-orbitron mb-4">
                ACTIVE TOURNAMENTS
              </h2>
              <p className="text-light/70 max-w-xl font-montserrat">
                Join high-stakes competitions, rise on the leaderboards, and win huge prize pools.
              </p>
            </div>
            <Link
              to="/tournaments"
              className="mt-6 md:mt-0 relative px-6 py-3 bg-white/5 border border-white/10 text-secondary font-bold rounded-xl font-orbitron text-sm hover:scale-105 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 shadow-lg"
              cursor-invert="true"
            >
              VIEW ALL TOURNAMENTS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="bg-glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-primary transition-colors mb-2">
                      {tournament.title}
                    </h3>
                    <p className="text-light/60 text-sm font-montserrat">
                      {tournament.game}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400">
                    {tournament.status.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-light/60 text-sm font-montserrat">Date</span>
                    <span className="text-white font-medium font-montserrat">{formatDate(tournament.date)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-light/60 text-sm font-montserrat">Prize Pool</span>
                    <span className="text-yellow-400 font-bold text-lg font-orbitron">{tournament.prize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-light/60 text-sm font-montserrat">Entry Fee</span>
                    <span className={`font-bold font-montserrat ${
                      tournament.entryFee === 'Free' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {tournament.entryFee}
                    </span>
                  </div>
                </div>

                <Link
                  to="/tournaments"
                  className="block text-center w-full bg-linear-to-r from-primary to-secondary text-darker py-3 rounded-lg font-bold hover:scale-105 transition-transform font-orbitron text-sm"
                >
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-20 bg-dark border-t border-white/5">
        <div className="container">
          <div className="bg-glass rounded-2xl p-6 sm:p-12 max-w-4xl mx-auto border border-primary/20 text-center relative overflow-hidden">
            {/* Background blur decoration */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-5xl font-black font-orbitron mb-6 text-gradient">
              BUILD YOUR GAMING LEGACY
            </h2>
            <p className="text-light/80 mb-8 max-w-2xl mx-auto leading-relaxed font-montserrat text-lg">
              Compete in matches, showcase your skills on live streams, and connect with top-tier players around the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-primary to-secondary text-darker font-bold rounded-xl font-orbitron text-sm hover:scale-105 transition-all duration-300 gaming-btn overflow-hidden"
              >
                JOIN THE ARENA
              </Link>
              <Link
                to="/features"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-light hover:bg-white/10 hover:text-white rounded-xl font-orbitron text-sm hover:scale-105 transition-all duration-300"
              >
                EXPLORE FEATURES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
