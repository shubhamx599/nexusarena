// src/components/sections/Tournaments.jsx
import { tournamentsData } from '../../data/tournaments.data'

const Tournaments = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-green-500/20 text-green-400'
      case 'live': return 'bg-red-500/20 text-red-400'
      case 'completed': return 'bg-gray-500/20 text-gray-400'
      default: return 'bg-blue-500/20 text-blue-400'
    }
  }

  return (
    <section className="py-20 bg-darker relative overflow-hidden" id="tournaments">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gradient font-orbitron mb-6">
            UPCOMING TOURNAMENTS
          </h2>
          <p className="text-xl text-light/80 max-w-2xl mx-auto font-montserrat">
            Compete in high-stakes tournaments and win amazing prizes. Register now!
          </p>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {tournamentsData.map((tournament) => (
            <div 
              key={tournament.id}
              className="bg-glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Tournament Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-primary transition-colors mb-2">
                    {tournament.title}
                  </h3>
                  <p className="text-light/60 text-sm font-montserrat">
                    {tournament.game}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(tournament.status)}`}>
                  {tournament.status.toUpperCase()}
                </span>
              </div>

              {/* Tournament Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-light/60 text-sm">Date</span>
                  <span className="text-white font-medium">{formatDate(tournament.date)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light/60 text-sm">Prize Pool</span>
                  <span className="text-yellow-400 font-bold text-lg">{tournament.prize}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light/60 text-sm">Teams</span>
                  <span className="text-white font-medium">{tournament.teams}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light/60 text-sm">Format</span>
                  <span className="text-white font-medium text-sm">{tournament.format}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-light/60 text-sm">Entry Fee</span>
                  <span className={`font-bold ${
                    tournament.entryFee === 'Free' ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {tournament.entryFee}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-linear-to-r from-primary to-secondary text-darker py-3 rounded-lg font-bold hover:scale-105 transition-transform">
                  Register Now
                </button>
                <button className="px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                  ⋯
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tournament Stats */}
        <div className="bg-glass rounded-2xl p-8 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-orbitron mb-2">$1M+</div>
              <div className="text-light/60 text-sm font-montserrat">Total Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary font-orbitron mb-2">500+</div>
              <div className="text-light/60 text-sm font-montserrat">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent font-orbitron mb-2">50K+</div>
              <div className="text-light/60 text-sm font-montserrat">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 font-orbitron mb-2">100+</div>
              <div className="text-light/60 text-sm font-montserrat">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tournaments