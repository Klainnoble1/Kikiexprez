'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">
            Reach out to Us
          </h2>
          <p className="text-gray-600">We'd love to hear from you. Send us a message.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="bg-red-accent text-white p-4 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy-blue mb-2">Phone</h4>
                  <p className="text-gray-700">+44 7404 534284</p>
                  <p className="text-sm text-gray-600">Don't hesitate to contact us!</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="bg-red-accent text-white p-4 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy-blue mb-2">Email</h4>
                  <p className="text-gray-700">kikiexprez@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="bg-red-accent text-white p-4 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy-blue mb-2">Head Office</h4>
                  <p className="text-gray-700">London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition"
            />
            <textarea
              name="message"
              placeholder="How can we help?"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition resize-none"
            />
            <button
              type="submit"
              className="w-full bg-red-accent text-white py-3 rounded-lg font-bold hover:bg-red-accent/90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
