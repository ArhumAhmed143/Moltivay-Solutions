import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Moltivay Solutions delivered our fintech platform two weeks ahead of schedule. Engr. Ghulam Ahmed and his engineering team have an unmatched grasp of secure cloud architecture and clean UI design.",
    author: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "PaySphere Capital",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "Their dual iOS and Android mobile development for our telemedicine app was flawless. Patient retention surged by 40% within the first two months post-launch. Highly recommended!",
    author: "Dr. Elena Rostova",
    role: "VP of Product Innovation",
    company: "VitalPulse Health",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    quote: "The Social Media Assistant service revolutionized our digital distribution. Automated content generation and multi-channel scheduling freed up 20+ team hours each week.",
    author: "David Sterling",
    role: "Head of Growth",
    company: "OmniVentures Media",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-electric text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-5">
            What Founders Say About Moltivay
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            Real outcomes and partnerships built on technical rigor and transparent collaboration.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-clean hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center space-x-1 mb-6 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-navy/90 text-sm sm:text-base leading-relaxed italic mb-8 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-navy">
                    {item.author}
                  </h4>
                  <p className="text-xs text-text-muted">
                    {item.role}, <span className="text-electric font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
