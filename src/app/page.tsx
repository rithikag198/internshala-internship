'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Target, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              VYOMGARUD
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-orange-500 font-semibold mb-4">
              Advanced UAV Systems
            </p>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Military-grade drone systems engineered for precision, reliability, and autonomous operations in the most demanding environments.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold transition-all">
              Contact Us
            </button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none"
        ></motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About VyomGarud</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            VyomGarud represents the pinnacle of unmanned aerial vehicle technology, combining cutting-edge engineering 
            with military-grade reliability. We design and manufacture autonomous drone systems that serve critical 
            missions across defense, surveillance, and industrial applications.
          </p>
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Capabilities</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive UAV solutions designed for mission-critical operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Precision Strike",
                description: "High-precision targeting systems with real-time guidance and autonomous decision-making capabilities."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Defense Systems",
                description: "Advanced counter-UAV systems and protective measures for critical infrastructure and assets."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Rapid Deployment",
                description: "Quick-launch systems capable of full operational readiness within minutes of deployment."
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Command & Control",
                description: "Integrated command systems with secure communication and real-time data transmission."
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black border border-gray-800 rounded-lg p-6 hover:border-orange-500 transition-all group"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-400 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Key Highlights</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Military-Grade Reliability",
              description: "Tested in extreme conditions with proven operational success rates exceeding 99.5% in field deployments."
            },
            {
              title: "AI-Powered Autonomy",
              description: "Advanced machine learning algorithms enable independent decision-making and adaptive mission execution."
            },
            {
              title: "Stealth Technology",
              description: "Low-observable design with reduced radar cross-section and acoustic signature for covert operations."
            }
          ].map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 1 ? 0 : index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{highlight.title}</h3>
              <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to deploy advanced UAV solutions? Get in touch with our team.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">+91 8881444693</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">info@vyomgarud.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">Bangalore, India</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">VYOMGARUD</h3>
          <p className="text-gray-400 mb-6">Advanced UAV Systems for Critical Missions</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Support</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 VyomGarud. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
