
import React, { useState } from "react";
import { Mail, Send, Github, Twitter, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 pt-10">
          <div className="text-center mb-16">
            <p className="inline-block font-mono text-sm text-gray-400 border border-gray-800 rounded-full px-3 py-1 mb-4">
              &lt; contact-me /&gt;
            </p>
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Have a project idea? Want to collaborate? Or just want to say hello?
              Feel free to reach out through the form or any of my social channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="border border-gray-800 rounded-lg p-6 md:p-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition-colors duration-300"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition-colors duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Info & Social */}
            <div className="lg:pl-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="border border-gray-800 rounded-lg p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                
                <p className="text-gray-400 mb-8">
                  Prefer to connect on social media? Feel free to reach out on any of these platforms:
                </p>
                
                <div className="space-y-6">
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg transition-all duration-300 hover:bg-white/5 hover:border-gray-600"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm text-gray-400">@username</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://twitter.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg transition-all duration-300 hover:bg-white/5 hover:border-gray-600"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800">
                      <Twitter className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Twitter</div>
                      <div className="text-sm text-gray-400">@username</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg transition-all duration-300 hover:bg-white/5 hover:border-gray-600"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-gray-400">/in/username</div>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:example@example.com"
                    className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg transition-all duration-300 hover:bg-white/5 hover:border-gray-600"
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-gray-400">example@example.com</div>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6 md:p-8">
                <h3 className="font-bold text-xl mb-4">Response Time</h3>
                <p className="text-gray-400">
                  I typically respond to messages within 24-48 hours. For urgent matters,
                  email is the fastest way to reach me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
