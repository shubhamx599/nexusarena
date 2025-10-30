// src/components/sections/Features.jsx
import { featuresData } from '../../data/features.data'

const Features = () => {
  return (
    <section className="py-20 bg-darker relative overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gradient font-orbitron mb-6">
            POWERFUL FEATURES
          </h2>
          <p className="text-xl text-light/80 max-w-2xl mx-auto font-montserrat">
            Everything you need to dominate the competition and build your gaming legacy.
          </p>
        </div>

        {/* Features Grid - 8 Items Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature) => (
            <div 
              key={feature.id}
              className="bg-glass rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-500 group cursor-pointer border border-white/5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Icon */}
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className={`text-lg font-bold font-orbitron mb-3 group-hover:${feature.color} transition-colors duration-300`}>
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-light/70 text-sm leading-relaxed font-montserrat">
                {feature.description}
              </p>
              
              {/* Hover Effect Line */}
              <div className="w-0 group-hover:w-full h-0.5 bg-linear-to-r from-primary to-secondary transition-all duration-500 mt-4"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-glass rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold font-orbitron mb-4 text-gradient">
              Ready to Dominate?
            </h3>
            <p className="text-light/80 mb-6 font-montserrat">
              Join thousands of pro gamers and start your journey to the top.
            </p>
            <button className="btn btn-primary text-lg px-8 py-4 font-montserrat">
              Start Gaming Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features