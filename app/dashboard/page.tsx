'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

interface Submission {
  id: number
  timestamp?: string
  name?: string
  email?: string
  phone?: string
  company?: string
  message?: string
}

export default function Dashboard() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [sendingEmail, setSendingEmail] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [emailSuccess, setEmailSuccess] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/submissions?password=${encodeURIComponent(password)}`)
      
      if (response.status === 401) {
        setError('Incorrect password')
        setLoading(false)
        return
      }

      if (!response.ok) {
        throw new Error('Failed to fetch submissions')
      }

      const data = await response.json()
      setSubmissions(data.submissions)
      setIsAuthenticated(true)
      setError('')
    } catch (err: any) {
      setError(err.message || 'Failed to load submissions')
    } finally {
      setLoading(false)
    }
  }

  const refreshSubmissions = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/submissions?password=${encodeURIComponent(password)}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch submissions')
      }

      const data = await response.json()
      setSubmissions(data.submissions)
    } catch (err: any) {
      setError(err.message || 'Failed to refresh submissions')
    } finally {
      setLoading(false)
    }
  }

  const handleReply = (submission: Submission) => {
    setSelectedSubmission(submission)
    setEmailSubject(`Re: Your inquiry to Kikiexprez Business Solutions`)
    setEmailMessage(`Dear ${submission.name || 'Valued Customer'},

Thank you for contacting Kikiexprez Business Solutions. We have received your inquiry and will respond to you shortly.

${submission.message ? `Your message: "${submission.message}"` : ''}

Best regards,
Kikiexprez Business Solutions Team`)
    setShowEmailModal(true)
    setEmailError('')
    setEmailSuccess('')
  }

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedSubmission?.email) return

    setSendingEmail(true)
    setEmailError('')
    setEmailSuccess('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-password': password,
        },
        body: JSON.stringify({
          to: selectedSubmission.email,
          subject: emailSubject,
          message: emailMessage,
          replyToEmail: 'info@kikiexprez.com',
          replyToName: 'Kikiexprez Business Solutions',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setEmailSuccess('Email sent successfully!')
        setTimeout(() => {
          setShowEmailModal(false)
          setEmailSubject('')
          setEmailMessage('')
          setSelectedSubmission(null)
        }, 2000)
      } else {
        setEmailError(data.error || 'Failed to send email')
      }
    } catch (err: any) {
      setEmailError(err.message || 'An error occurred while sending email')
    } finally {
      setSendingEmail(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="max-w-md w-full px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h1 className="text-3xl font-bold text-navy-blue mb-6 text-center">
                Dashboard Login
              </h1>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition"
                    required
                    placeholder="Enter dashboard password"
                  />
                </div>
                {error && (
                  <div className="text-red-accent text-sm">{error}</div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-accent text-white py-3 rounded-lg font-bold hover:bg-red-accent/90 transition disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Login'}
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-navy-blue mb-2">Form Submissions Dashboard</h1>
            <p className="text-gray-600">View all contact form submissions</p>
          </div>
          <button
            onClick={refreshSubmissions}
            disabled={loading}
            className="bg-navy-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-navy-blue/90 transition disabled:opacity-50"
          >
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading && submissions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500">Loading submissions...</div>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500">No submissions found</div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date/Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {submission.timestamp
                          ? new Date(submission.timestamp).toLocaleString()
                          : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-navy-blue">
                        {submission.name || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {submission.email || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {submission.phone || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {submission.company || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                        {submission.message || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {submission.email ? (
                          <button
                            onClick={() => handleReply(submission)}
                            className="bg-red-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-red-accent/90 transition text-xs"
                          >
                            Reply
                          </button>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-500 text-center">
          Total submissions: {submissions.length}
        </div>
      </div>

      {/* Email Modal */}
      {showEmailModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-navy-blue">Send Email Reply</h2>
                <button
                  onClick={() => {
                    setShowEmailModal(false)
                    setSelectedSubmission(null)
                    setEmailSubject('')
                    setEmailMessage('')
                    setEmailError('')
                    setEmailSuccess('')
                  }}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1"><strong>To:</strong> {selectedSubmission.email}</p>
                {selectedSubmission.name && (
                  <p className="text-sm text-gray-600 mb-1"><strong>Name:</strong> {selectedSubmission.name}</p>
                )}
                {selectedSubmission.company && (
                  <p className="text-sm text-gray-600"><strong>Company:</strong> {selectedSubmission.company}</p>
                )}
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    rows={10}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-accent focus:bg-white transition resize-none"
                    required
                  />
                </div>

                {emailError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {emailError}
                  </div>
                )}

                {emailSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                    {emailSuccess}
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEmailModal(false)
                      setSelectedSubmission(null)
                      setEmailSubject('')
                      setEmailMessage('')
                      setEmailError('')
                      setEmailSuccess('')
                    }}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={sendingEmail}
                    className="flex-1 bg-red-accent text-white py-3 rounded-lg font-medium hover:bg-red-accent/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sendingEmail ? 'Sending...' : 'Send Email'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

