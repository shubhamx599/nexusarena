// src/components/sections/Contact.jsx
import { useState } from "react";
import SocialMediaIcons from "../ui/SocialMediaIcons";

// CORRECT REMIX ICON IMPORTS
import { 
  RiMailLine, 
  RiPhoneLine, 
  RiDiscordLine, 
  RiMapPinLine 
} from "@remixicon/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-darker relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gradient font-orbitron mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-l md:text-xl text-light/80 max-w-2xl mx-auto font-montserrat">
            Have questions or need support?<br className="hidden sm:block" />Our team is here to help you
            24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information - MOBILE CENTER ALIGNED */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-orbitron text-white text-center md:text-left mb-6">
              Contact Information
            </h3>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group cursor-pointer text-center sm:text-left">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors shrink-0">
                  <RiMailLine className="text-xl text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-orbitron group-hover:text-primary transition-colors">
                    Email Us
                  </h4>
                  <p className="text-light/80 font-montserrat">
                    support@nexusarena.com
                  </p>
                  <p className="text-light/60 text-sm font-montserrat">
                    We'll reply within 24 hours
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group cursor-pointer text-center sm:text-left">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-colors shrink-0">
                  <RiPhoneLine className="text-xl text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-orbitron group-hover:text-secondary transition-colors">
                    Call Us
                  </h4>
                  <p className="text-light/80 font-montserrat">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-light/60 text-sm font-montserrat">
                    Mon-Fri from 8am to 6pm
                  </p>
                </div>
              </div>

              {/* Discord */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group cursor-pointer text-center sm:text-left">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors shrink-0">
                  <RiDiscordLine className="text-xl text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-orbitron group-hover:text-purple-400 transition-colors">
                    Discord Community
                  </h4>
                  <p className="text-light/80 font-montserrat">
                    Join our Discord server
                  </p>
                  <p className="text-light/60 text-sm font-montserrat">
                    50,000+ members online
                  </p>
                </div>
              </div>

              {/* Office */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group cursor-pointer text-center sm:text-left">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors shrink-0">
                  <RiMapPinLine className="text-xl text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-orbitron group-hover:text-green-400 transition-colors">
                    Visit Our Office
                  </h4>
                  <p className="text-light/80 font-montserrat">
                    123 Gaming Street
                  </p>
                  <p className="text-light/60 text-sm font-montserrat">
                    Esports City, EC 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media - MOBILE CENTER ALIGNED */}
            <div className="pt-6 border-t border-white/10 text-center sm:text-left">
              <h4 className="font-bold text-white font-orbitron mb-4">
                Follow Us
              </h4>
              <div className="flex justify-center sm:justify-start">
                <SocialMediaIcons />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-glass rounded-2xl p-6 sm:p-8 border border-white/5">
            <h3 className="text-2xl font-bold font-orbitron text-white mb-6 text-center sm:text-left">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                <div>
                  <label className="block text-light/80 text-sm font-medium mb-2 font-montserrat sm:text-left">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 sm:py-2 text-white placeholder-light/40 focus:outline-none focus:border-primary transition-colors font-montserrat text-center sm:text-left"
                    required
                  />
                </div>
                <div>
                  <label className="block text-light/80 text-sm font-medium mb-2 font-montserrat sm:text-left">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 sm:py-2 text-white placeholder-light/40 focus:outline-none focus:border-primary transition-colors font-montserrat text-center sm:text-left"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-light/80 text-sm font-medium mb-2 font-montserrat sm:text-left">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 sm:py-2 text-white placeholder-light/40 focus:outline-none focus:border-primary transition-colors font-montserrat text-center sm:text-left"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-light/80 text-sm font-medium mb-2 font-montserrat sm:text-left">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us how we can help you..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-light/40 focus:outline-none focus:border-primary transition-colors resize-none font-montserrat text-center sm:text-left"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-darker py-3 rounded-lg font-bold text-lg hover:scale-105 transition-transform font-montserrat"
              >
                Send Message
              </button>

              <p className="text-light/60 text-sm text-center font-montserrat">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;