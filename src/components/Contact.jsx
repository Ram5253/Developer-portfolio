import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Globe, Download, Send } from 'lucide-react';

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text, message) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(message);
      }).catch(() => {
        fallbackCopy(text, message);
      });
    } else {
      fallbackCopy(text, message);
    }
  };

  const fallbackCopy = (text, message) => {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.left = '-999999px';
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand('copy');
      showToast(message);
    } catch {
      showToast('Press Ctrl+C to copy');
    }
    document.body.removeChild(el);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      subject + ' - from ' + name
    )}&body=${encodeURIComponent(
      `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`
    )}`;

    showToast('Opening email client to dispatch...');

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">
            Open to Python Backend, Data Engineering, and AI/ML Specialist roles. Feel free to reach out directly.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Left Column: Contact Methods & Resume */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              Whether you have a technical opportunity, a backend architecture query, or want to explore AI multi-agent systems together, my inbox is always open.
            </p>

            <div className="contact-methods">
              {/* Email */}
              <div className="contact-method-item">
                <div className="contact-method-left">
                  <div className="method-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="method-label">Email</div>
                    <a href={`mailto:${personalData.email}`} className="method-value">
                      {personalData.email}
                    </a>
                  </div>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(personalData.email, 'Email copied to clipboard!')}
                  title="Copy Email"
                >
                  <Copy size={16} />
                </button>
              </div>

              {/* Phone */}
              <div className="contact-method-item">
                <div className="contact-method-left">
                  <div className="method-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="method-label">Phone</div>
                    <a href={`tel:${personalData.phone}`} className="method-value">
                      {personalData.phone}
                    </a>
                  </div>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(personalData.phone, 'Phone number copied to clipboard!')}
                  title="Copy Phone"
                >
                  <Copy size={16} />
                </button>
              </div>

              {/* Location */}
              <div className="contact-method-item">
                <div className="contact-method-left">
                  <div className="method-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="method-label">Location</div>
                    <div className="method-value">{personalData.location}</div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="contact-method-item">
                <div className="contact-method-left">
                  <div className="method-icon">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div className="method-label">Profiles</div>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
                      <a
                        href={personalData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '0.9rem' }}
                      >
                        GitHub
                      </a>
                      <span>•</span>
                      <a
                        href={personalData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '0.9rem' }}
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <a
              href={personalData.resumeDownloadUrl}
              className="btn btn-primary"
              id="btn-download-resume"
              style={{ width: '100%' }}
              title="Download Resume (PDF)"
            >
              <Download size={18} />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-card">
            <h3 className="contact-info-title">Send a Quick Message</h3>
            <p className="contact-info-desc">
              Leave a note and I will get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Backend Engineer Role / Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Hi Sai Ram, I came across your portfolio and wanted to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                id="btn-submit-message"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
