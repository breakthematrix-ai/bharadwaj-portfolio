import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-lg blur opacity-75"></div>
            <div className="relative bg-black rounded-lg p-4">
              <Mail size={32} className="text-cyan-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
            Contact
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-cyan-500 to-violet-500 p-3 rounded-full">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Email</h3>
                <p className="text-gray-200">bchukkal@terpmail.umd.edu</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-violet-500 to-cyan-500 p-3 rounded-full">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Phone</h3>
                <p className="text-gray-200">+1 (503) 268-3042</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-cyan-500 to-violet-500 p-3 rounded-full">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Location</h3>
                <p className="text-gray-200">Dallas, Texas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-violet-500 to-cyan-500 p-3 rounded-full">
                <Calendar className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Schedule a Meeting</h3>
                <a 
                  href="https://calendly.com/bharadwaj-chukkala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Book a time slot
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xl font-semibold text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/50 backdrop-blur-sm border border-cyan-900 focus:border-cyan-400 rounded-lg px-4 py-2 text-white focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xl font-semibold text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/50 backdrop-blur-sm border border-violet-900 focus:border-violet-400 rounded-lg px-4 py-2 text-white focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-xl font-semibold text-white mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-black/50 backdrop-blur-sm border border-cyan-900 focus:border-cyan-400 rounded-lg px-4 py-2 text-white focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xl font-semibold text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-black/50 backdrop-blur-sm border border-violet-900 focus:border-violet-400 rounded-lg px-4 py-2 text-white focus:outline-none transition-colors"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
