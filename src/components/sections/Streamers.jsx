// src/components/sections/Streamers.jsx
import { streamersData } from '../../data/streamers.data'

const Streamers = () => {
  return (
    <section className="py-20 bg-dark relative overflow-hidden" id="streamers">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-28 h-28 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gradient font-orbitron mb-6">
            TOP STREAMERS
          </h2>
          <p className="text-xl text-light/80 max-w-2xl mx-auto font-montserrat">
            Watch and learn from the best gamers in the world. Live streams daily.
          </p>
        </div>

        {/* Streamers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {streamersData.map((streamer) => (
            <div 
              key={streamer.id}
              className="bg-glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Streamer Header */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                <div className="relative">
                  <img 
                    src={streamer.avatar} 
                    alt={streamer.name}
                    className="w-16 h-16 rounded-full border-2 border-primary/50 group-hover:border-primary transition-colors"
                  />
                  {/* Live Badge */}
                  {streamer.isLive && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-darker animate-pulse"></div>
                  )}
                </div>
                
                {/* Streamer Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-white group-hover:text-primary transition-colors font-orbitron">
                    {streamer.name}
                  </h3>
                  <p className="text-light/60 text-sm font-montserrat">
                    {streamer.username}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      streamer.isLive 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {streamer.isLive ? 'LIVE' : 'OFFLINE'}
                    </span>
                    <span className="text-xs text-light/60">{streamer.game}</span>
                  </div>
                </div>
              </div>

              {/* Stream Title */}
              {streamer.isLive && (
                <p className="text-sm text-light/80 mb-4 font-montserrat line-clamp-2">
                  {streamer.streamTitle}
                </p>
              )}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary font-orbitron">{streamer.followers}</div>
                  <div className="text-xs text-light/60 font-montserrat">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary font-orbitron">{streamer.viewers}</div>
                  <div className="text-xs text-light/60 font-montserrat">Viewers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 font-orbitron">{streamer.winRate}</div>
                  <div className="text-xs text-light/60 font-montserrat">Win Rate</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-linear-to-r from-primary to-secondary text-darker py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">
                  {streamer.isLive ? 'Watch Live' : 'Follow'}
                </button>
                <button className="px-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Streamer CTA */}
        <div className="bg-linear-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-gradient mb-4">
            Ready to Start Streaming?
          </h3>
          <p className="text-light/80 mb-6 max-w-2xl mx-auto font-montserrat">
            Join our partner program and start earning from your gameplay. 
            We provide all the tools you need to grow your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary text-lg px-8 py-4 font-montserrat">
              Become a Streamer
            </button>
            <button className="btn btn-secondary text-lg px-8 py-4 font-montserrat">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Streamers