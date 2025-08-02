'use client'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function ContactForm() {
  const [dateTime, setDateTime] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [showOtherField, setShowOtherField] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project_type: 'AI Solutions',
    custom_project_type: '',
    budget: 'Below $1,000',
    description: '',
    meeting_type: 'Zoom',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const date = dateTime?.toISOString().split('T')[0]
    const time = dateTime?.toTimeString().split(' ')[0]

    const payload = {
      ...formData,
      project_type:
        formData.project_type === 'Other'
          ? formData.custom_project_type
          : formData.project_type,
      date,
      time,
    }

    try {
      await axios.post('http://localhost:8000/api/contact/submit/', payload)
      toast.success('✅ Request received! We’ll contact you soon.')

      // Reset everything except dateTime
      setShowForm(false)
      setShowOtherField(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        project_type: 'AI Solutions',
        custom_project_type: '',
        budget: 'Below $1,000',
        description: '',
        meeting_type: 'Zoom',
      })
      setDateTime(null) // Optional: reset the date too
    } catch (err) {
      console.error(err)
      toast.error('❌ Failed to submit. Try again later.')
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-white shadow-xl border border-gray-200">
      <Toaster position="top-center" />

      <h2 className="text-3xl font-bold mb-3 text-gray-800">Schedule a Discovery Call</h2>
      <p className="text-gray-600 mb-6">
        Select a date and answer a few questions to help us better understand your project.
      </p>

      <DatePicker
        selected={dateTime}
        onChange={(date) => {
          setDateTime(date)
          setShowForm(true)
        }}
        showTimeSelect
        dateFormat="Pp"
        className="border px-4 py-2 rounded w-full mb-6"
        placeholderText="Select date & time"
      />

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded w-full"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded w-full"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <input
            type="text"
            placeholder="Company Name"
            className="border p-3 rounded w-full"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />

          <select
            className="border p-3 rounded w-full"
            value={formData.project_type}
            onChange={(e) => {
              const val = e.target.value
              setFormData({ ...formData, project_type: val })
              setShowOtherField(val === 'Other')
            }}
          >
            <option>AI Solutions</option>
            <option>Web Development</option>
            <option>AI + Web Integration</option>
            <option>Other</option>
          </select>

          {showOtherField && (
            <input
              type="text"
              placeholder="Please specify your project"
              className="border p-3 rounded w-full"
              value={formData.custom_project_type}
              onChange={(e) =>
                setFormData({ ...formData, custom_project_type: e.target.value })
              }
            />
          )}

          <select
            className="border p-3 rounded w-full"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          >
            <option>Below $1,000</option>
            <option>$1,000 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>Above $10,000</option>
          </select>

          <textarea
            placeholder="Describe your project requirements..."
            className="border p-3 rounded w-full"
            rows={5}
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>

          <select
            className="border p-3 rounded w-full"
            value={formData.meeting_type}
            onChange={(e) => setFormData({ ...formData, meeting_type: e.target.value })}
          >
            <option>Zoom</option>
            <option>Google Meet</option>
            <option>MS Teams</option>
          </select>

          <button
            type="submit"
            className="relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:from-cyan-300 hover:to-blue-400 transition duration-300 hover:scale-105 active:scale-95 border-2 border-black"
          >
            <span className="z-10">🚀 Submit Request</span>
          </button>
        </form>
      )}
    </div>
  )
}
