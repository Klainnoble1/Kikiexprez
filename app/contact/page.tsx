'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been submitted successfully.')
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      } else {
        setSubmitMessage(data.error || 'Failed to submit form. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Get in touch with our team. We're here to help with your shipping and logistics needs and will respond as quickly as possible.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="/cargo-delivery-logistics-contact.jpg"
          alt="Contact hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-2">Reach out to Us</h2>
              <div className="w-12 h-1 bg-red-accent mb-8" />
              <p className="text-gray-600 mb-12">
                Have questions about our services? We're here to assist you. Contact us through any of the following methods and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="bg-red-accent text-white p-3 rounded-lg flex items-center justify-center flex-shrink-0 h-12 w-12">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue mb-1">Phone</h4>
                    <p className="text-gray-700">+44 7404 534284</p>
                    <p className="text-sm text-gray-600">Available Monday to Friday, 9am-6pm GMT</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="bg-red-accent text-white p-3 rounded-lg flex items-center justify-center flex-shrink-0 h-12 w-12">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue mb-1">Email</h4>
                    <a href="mailto:info@kikiexprez.com" className="block text-gray-700 hover:text-red-accent transition mb-1">
                      info@kikiexprez.com
                    </a>
                    <a href="mailto:kikiexprez@gmail.com" className="block text-gray-700 hover:text-red-accent transition mb-1">
                      kikiexprez@gmail.com
                    </a>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="bg-red-accent text-white p-3 rounded-lg flex items-center justify-center flex-shrink-0 h-12 w-12">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue mb-1">Head Office</h4>
                    <p className="text-gray-700">London, United Kingdom</p>
                    <p className="text-sm text-gray-600">International shipping partner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy-blue mb-2">Send us a Message</h2>
              <div className="w-12 h-1 bg-red-accent mb-8" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition resize-none"
                  />
                </div>
                {submitMessage && (
                  <div className={`p-3 rounded-lg text-sm ${
                    submitMessage.includes('Thank you') 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-accent text-white py-3 rounded-lg font-bold hover:bg-red-accent/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-blue mb-12 text-center">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.8395857169374!2d-0.1276474!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604a3ff1ba1ef%3A0x7efb5f57fcb77e1b!2sLondon!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
