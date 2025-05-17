// components/sections/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaInstagram, FaRegCopy, FaCheckCircle } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaLinkedin className="text-blue-600 dark:text-blue-400 text-2xl" />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/munnakumar32990/',
  },
  {
    icon: <FaGithub className="text-gray-800 dark:text-gray-200 text-2xl" />,
    label: 'GitHub',
    url: 'https://github.com/MunnaKumar32990',
  },
  {
    icon: <FaInstagram className="text-pink-500 dark:text-pink-400 text-2xl" />,
    label: 'Instagram',
    url: 'https://www.instagram.com/kumar__munna/?igsh=Zjl0Z2JnZWo1MHdt#',
  },
];

const contactInfo = [
  {
    icon: <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />,
    label: 'Email',
    value: 'munnakushw7@gmail.com',
    url: 'mailto:munnakushw7@gmail.com',
  },
  {
    icon: <FaPhone className="text-green-600 dark:text-green-400 text-xl" />,
    label: 'Phone',
    value: '+91 6207693788',
    url: 'tel:+916207693788',
  },
  {
    icon: <FaMapMarkerAlt className="text-red-500 dark:text-red-400 text-xl" />,
    label: 'Location',
    value: 'Bettiah, Bihar, India',
    url: '',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const emailRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.',
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('your.email@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
            <span className="inline-block bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 px-4 py-1 rounded-full text-sm font-medium">
              <FaCheckCircle className="inline mr-1 mb-0.5" /> Available for freelance & collaborations
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Let's work together! Send me a message or connect with me below.
          </p>
        </motion.div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                      : status.type === 'error'
                      ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                      : ''
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-8 justify-center"
          >
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  {info.icon}
                  {info.url ? (
                    <a href={info.url} className="text-gray-700 dark:text-gray-200 hover:underline" target="_blank" rel="noopener noreferrer">{info.value}</a>
                  ) : (
                    <span className="text-gray-700 dark:text-gray-200">{info.value}</span>
                  )}
                  {info.label === 'Email' && (
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="ml-2 p-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      aria-label="Copy Email"
                    >
                      {copied ? <FaCheckCircle className="text-green-500" /> : <FaRegCopy className="text-gray-500" />}
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-6 mt-6 justify-center">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hover:scale-110 transition-transform">
                  {link.icon}
                </a>
              ))}
            </div>
            {/* Map Embed Placeholder */}
            <div className="mt-8">
              <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.019123456789!2d84.5160!3d26.8022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39935c1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sBettiah%2C%20Bihar%2C%20India!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bettiah, Bihar, India Map"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Let's Connect Callout */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg text-xl font-semibold">
            Let's Connect & Build Something Great Together!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;