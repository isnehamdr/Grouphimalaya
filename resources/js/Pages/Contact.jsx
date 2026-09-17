
// import React, { useState } from 'react'
// import MainWrapper from '@/MainComponents/MainWrapper'
// import { Head } from '@inertiajs/react'


// const Contact = () => {

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     subject: '',
//     message: '',
//   })

//   const [errors, setErrors] = useState({})

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target

//     setFormData({
//       ...formData,
//       [name]: value,
//     })

//     // Clear error when typing
//     setErrors({
//       ...errors,
//       [name]: '',
//     })
//   }

//   // Validation
//   const validateForm = () => {
//     let newErrors = {}

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required'
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required'
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required'
//     } 
//     else if (!/^[0-9]{7,15}$/.test(formData.phone)) {
//       newErrors.phone = 'Enter a valid phone number'
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = 'Subject is required'
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required'
//     }

//     setErrors(newErrors)

//     return Object.keys(newErrors).length === 0
//   }

//   // Submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (validateForm()) {
//       console.log('Form Submitted:', formData)

//       // Reset form
//       setFormData({
//         firstName: '',
//         lastName: '',
//         phone: '',
//         subject: '',
//         message: '',
//       })
//     }
//   }

//   return (
//     <MainWrapper>
//       <Head>
//         <title>Contact | Himalaya Organization</title>
//       </Head>
//       <div className='w-full min-h-screen px-3 sm:px-6 lg:px-8 flex flex-col items-center text-white'>

//         {/* Header Section */}
//         <div className='flex flex-col justify-center items-center text-center pt-24 lg:pt-32 lg:pb-16 pb-8'>
          
//           <p className='text-3xl sm:text-4xl lg:text-6xl font-medium'>
//             We’re Here to Listen and Help
//           </p>

//           <p className='text-base sm:text-lg lg:max-w-2xl mt-4 text-gray-500'>
//             Get in touch with our team for support, partnership inquiries,
//             or any questions about our work.
//           </p>

//         </div>

//         {/* Form Container */}
//         <div className='w-full max-w-4xl bg-[#121318] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-700 lg:mb-16 mb-8'>

//           <p className='text-2xl sm:text-3xl lg:text-4xl font-medium'>
//             Send Us a Message
//           </p>

//           <p className='text-gray-500 mt-2'>
//             Fill out the form and team will get back to you within 24-48 hours.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className='flex flex-col gap-5 mt-8'
//           >

//             {/* Name Row */}
//             <div className='flex flex-col sm:flex-row gap-4'>

//               {/* First Name */}
//               <div className='flex flex-col w-full'>
//                 <input
//                   type='text'
//                   name='firstName'
//                   placeholder='First name'
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
//                 />

//                 {errors.firstName && (
//                   <span className='text-red-500 text-sm mt-1'>
//                     {errors.firstName}
//                   </span>
//                 )}
//               </div>

//               {/* Last Name */}
//               <div className='flex flex-col w-full'>
//                 <input
//                   type='text'
//                   name='lastName'
//                   placeholder='Last name'
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
//                 />

//                 {errors.lastName && (
//                   <span className='text-red-500 text-sm mt-1'>
//                     {errors.lastName}
//                   </span>
//                 )}
//               </div>

//             </div>

//             {/* Phone */}
//             <div className='flex flex-col'>
//               <input
//                 type='tel'
//                 name='phone'
//                 placeholder='Phone Number'
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
//               />

//               {errors.phone && (
//                 <span className='text-red-500 text-sm mt-1'>
//                   {errors.phone}
//                 </span>
//               )}
//             </div>

//             {/* Subject */}
//             <div className='flex flex-col'>
//               <input
//                 type='text'
//                 name='subject'
//                 placeholder='Subject'
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
//               />

//               {errors.subject && (
//                 <span className='text-red-500 text-sm mt-1'>
//                   {errors.subject}
//                 </span>
//               )}
//             </div>

//             {/* Message */}
//             <div className='flex flex-col'>
//               <textarea
//                 name='message'
//                 placeholder='Message'
//                 rows={5}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
//               />

//               {errors.message && (
//                 <span className='text-red-500 text-sm mt-1'>
//                   {errors.message}
//                 </span>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type='submit'
//               className='bg-[#4b4640] text-white rounded-full py-3 font-medium hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg'
//             >
//               Submit Message
//             </button>

//           </form>

//           <div className='mt-4 lg:mt-8'>
//             <p className='text-2xl sm:text-3xl lg:text-4xl font-medium'>Contact Information</p>

//             <div className='grid grid-cols-1 lg:grid-cols-3 mt-4 lg:mt-8 gap-4'>
//               <div className='bg-[#0b0c10] p-4 rounded-2xl'>
//                 <p className='text-[#ae8755]'>Email Us</p>
//                 <p className='mt-4 text-lg'>info@grouphimalaya.com</p>
//               </div>

//               <div className='bg-[#0b0c10] p-4 rounded-2xl'>
//                 <p className='text-[#ae8755]'>Call Us</p>
//                 <p className='mt-4 text-lg'>+977 061 523848</p>
//               </div>

//               <div className='bg-[#0b0c10] p-4 rounded-2xl'>
//                 <p className='text-[#ae8755]'>Visit Us</p>
//                 <p className='mt-4 text-lg'>Nayabazar - 11,
// Pokhara</p>
//               </div>
//             </div>
//           </div>

//         </div>

//       </div>
//     </MainWrapper>
//   )
// }

// export default Contact



import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { MdRefresh } from 'react-icons/md'
import MainWrapper from '@/MainComponents/MainWrapper'
import SEO from '@/Components/SEO'

const initialFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  subject: '',
  message: '',
  verificationCode: '',
  website: '',
}

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isChallengeLoading, setIsChallengeLoading] = useState(false)
  const [securityDelayRemaining, setSecurityDelayRemaining] = useState(0)
  const [challenge, setChallenge] = useState({
    code: '',
    minimumSeconds: 3,
    fetchedAt: 0,
  })

  const fetchChallenge = async () => {
    setIsChallengeLoading(true)

    try {
      const response = await axios.get(route('contact.challenge'))
      const minimumSeconds = response.data.minimumSeconds ?? 3

      setChallenge({
        code: response.data.code,
        minimumSeconds,
        fetchedAt: Date.now(),
      })
      setSecurityDelayRemaining(minimumSeconds)
      setFormData((current) => ({
        ...current,
        verificationCode: '',
      }))
      setErrors((current) => ({
        ...current,
        verificationCode: '',
        form: '',
      }))
    } catch (error) {
      setSubmitStatus('error')
      setErrors((current) => ({
        ...current,
        form: 'Unable to load the verification code. Please refresh the page and try again.',
      }))
    } finally {
      setIsChallengeLoading(false)
    }
  }

  useEffect(() => {
    fetchChallenge()
  }, [])

  useEffect(() => {
    if (!challenge.fetchedAt) {
      return undefined
    }

    const updateDelay = () => {
      const elapsedSeconds = Math.floor((Date.now() - challenge.fetchedAt) / 1000)
      setSecurityDelayRemaining(Math.max(0, challenge.minimumSeconds - elapsedSeconds))
    }

    updateDelay()
    const timer = setInterval(updateDelay, 250)

    return () => clearInterval(timer)
  }, [challenge])

  const verificationMatches = useMemo(() => {
    return Boolean(
      challenge.code &&
      formData.verificationCode.trim().toUpperCase() === challenge.code
    )
  }, [challenge.code, formData.verificationCode])

  const canSubmit = verificationMatches && securityDelayRemaining === 0 && !isChallengeLoading && !isSubmitting

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    const nextValue = name === 'verificationCode' ? value.toUpperCase() : value

    setFormData((current) => ({
      ...current,
      [name]: nextValue,
    }))

    // Clear error when typing
    setErrors((current) => ({
      ...current,
      [name]: '',
      form: '',
    }))
  }

  // Validation
  const validateForm = () => {
    let newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } 
    else if (!/^[0-9+\-\s()]{7,30}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    if (!formData.verificationCode.trim()) {
      newErrors.verificationCode = 'Verification code is required'
    } else if (!verificationMatches) {
      newErrors.verificationCode = 'Type the code exactly as shown'
    }

    if (securityDelayRemaining > 0) {
      newErrors.form = 'Please wait a moment before sending your message'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null)

    if (!validateForm() || !canSubmit) {
      return
    }

    setIsSubmitting(true)

    try {
      await axios.post(route('contact.submit'), formData)

      setSubmitStatus('success')
      setFormData(initialFormData)
      await fetchChallenge()

      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      const responseErrors = error?.response?.data?.errors

      if (responseErrors) {
        const nextErrors = Object.fromEntries(
          Object.entries(responseErrors).map(([key, value]) => [
            key,
            Array.isArray(value) ? value[0] : value,
          ])
        )

        setErrors(nextErrors)
      } else {
        setErrors({
          form: error?.response?.data?.message || 'Unable to submit your message right now. Please try again.',
        })
      }

      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // SEO data with consistent contact keywords
  const seoData = {
    title: "Contact Us | Get in Touch with Himalaya Organization Nepal",
    description: "Contact Himalaya Organization in Pokhara, Nepal. Reach out for support, partnership inquiries, automobile sales, agriculture services, banking solutions, or real estate investments. Call +977 061 523848 or email info@grouphimalaya.com.",
    url: "https://www.himalayaorganization.com/contact",
    image: "/images/logo.png",
  }

  return (
    <MainWrapper>
      <SEO {...seoData} />
      
      <div className='w-full min-h-screen px-3 sm:px-6 lg:px-8 flex flex-col items-center text-white'>

        {/* Header Section */}
        <div className='flex flex-col justify-center items-center text-center pt-24 lg:pt-32 lg:pb-16 pb-8'>
          <h1 className='text-3xl sm:text-4xl lg:text-6xl font-medium'>
            We're Here to Listen and Help
          </h1>
          <p className='text-base sm:text-lg lg:max-w-2xl mt-4 text-gray-500'>
            Get in touch with our team for support, partnership inquiries,
            or any questions about our work.
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className='w-full max-w-4xl mb-4 rounded-xl bg-green-500/20 border border-green-500 p-4 text-center'>
            <p className='text-green-400'>Thank you for reaching out! Our team will get back to you within 24-48 hours.</p>
          </div>
        )}

        {/* Form Container */}
        <div className='w-full max-w-4xl bg-[#121318] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-700 lg:mb-16 mb-8'>

          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium'>
            Send Us a Message
          </h2>
          <p className='text-gray-500 mt-2'>
            Fill out the form and team will get back to you within 24-48 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-5 mt-8'
          >
            <input
              type='text'
              name='website'
              value={formData.website}
              onChange={handleChange}
              className='hidden'
              tabIndex='-1'
              autoComplete='off'
              aria-hidden='true'
            />

            {/* Name Row */}
            <div className='flex flex-col sm:flex-row gap-4'>
              {/* First Name */}
              <div className='flex flex-col w-full'>
                <label htmlFor="firstName" className="text-sm text-gray-400 mb-1">First Name *</label>
                <input
                  id="firstName"
                  type='text'
                  name='firstName'
                  placeholder='First name'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
                  aria-label="First Name"
                />
                {errors.firstName && (
                  <span className='text-red-500 text-sm mt-1' role="alert">
                    {errors.firstName}
                  </span>
                )}
              </div>

              {/* Last Name */}
              <div className='flex flex-col w-full'>
                <label htmlFor="lastName" className="text-sm text-gray-400 mb-1">Last Name *</label>
                <input
                  id="lastName"
                  type='text'
                  name='lastName'
                  placeholder='Last name'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
                  aria-label="Last Name"
                />
                {errors.lastName && (
                  <span className='text-red-500 text-sm mt-1' role="alert">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className='flex flex-col'>
              <label htmlFor="phone" className="text-sm text-gray-400 mb-1">Phone Number *</label>
              <input
                id="phone"
                type='tel'
                name='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
                className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
                aria-label="Phone Number"
              />
              {errors.phone && (
                <span className='text-red-500 text-sm mt-1' role="alert">
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Subject */}
            <div className='flex flex-col'>
              <label htmlFor="subject" className="text-sm text-gray-400 mb-1">Subject *</label>
              <input
                id="subject"
                type='text'
                name='subject'
                placeholder='Subject'
                value={formData.subject}
                onChange={handleChange}
                className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
                aria-label="Subject"
              />
              {errors.subject && (
                <span className='text-red-500 text-sm mt-1' role="alert">
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Message */}
            <div className='flex flex-col'>
              <label htmlFor="message" className="text-sm text-gray-400 mb-1">Message *</label>
              <textarea
                id="message"
                name='message'
                placeholder='Message'
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className='border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4b4640] bg-[#121318]'
                aria-label="Message"
              />
              {errors.message && (
                <span className='text-red-500 text-sm mt-1' role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <div className='rounded-2xl border border-[#ae8755]/40 bg-[#0b0c10] p-4'>
              <div className='flex flex-col md:flex-row md:items-end gap-4'>
                <div className='flex-1'>
                  <label htmlFor="verificationCode" className="text-sm text-gray-400 mb-2 block">Verification Code *</label>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <div className='min-h-[50px] flex items-center justify-center rounded-xl border border-[#ae8755]/50 bg-[#121318] px-5 text-xl font-semibold tracking-[0.35em] text-[#ae8755] sm:min-w-[180px]' aria-live='polite'>
                      {isChallengeLoading ? '...' : challenge.code}
                    </div>
                    <button
                      type='button'
                      onClick={fetchChallenge}
                      disabled={isChallengeLoading || isSubmitting}
                      className='h-[50px] w-[50px] shrink-0 rounded-full border border-[#ae8755]/50 text-[#ae8755] flex items-center justify-center hover:bg-[#ae8755] hover:text-black transition-colors disabled:cursor-not-allowed disabled:opacity-50'
                      aria-label='Refresh verification code'
                      title='Refresh verification code'
                    >
                      <MdRefresh className={isChallengeLoading ? 'animate-spin text-2xl' : 'text-2xl'} />
                    </button>
                  </div>
                </div>

                <div className='flex flex-col md:w-[280px]'>
                  <input
                    id='verificationCode'
                    type='text'
                    name='verificationCode'
                    placeholder='Type code'
                    value={formData.verificationCode}
                    onChange={handleChange}
                    maxLength={6}
                    className='h-[50px] border rounded-xl p-3 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ae8755] bg-[#121318] uppercase'
                    aria-label='Verification Code'
                  />
                  {errors.verificationCode && (
                    <span className='text-red-500 text-sm mt-1' role='alert'>
                      {errors.verificationCode}
                    </span>
                  )}
                  {!errors.verificationCode && verificationMatches && securityDelayRemaining === 0 && (
                    <span className='text-green-400 text-sm mt-1' role='status'>
                      Verified
                    </span>
                  )}
                  {!errors.verificationCode && verificationMatches && securityDelayRemaining > 0 && (
                    <span className='text-[#ae8755] text-sm mt-1' role='status'>
                      Ready in {securityDelayRemaining}s
                    </span>
                  )}
                </div>
              </div>
            </div>

            {errors.form && (
              <div className='rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300' role='alert'>
                {errors.form}
              </div>
            )}

            {/* Submit Button */}
            <button
              type='submit'
              disabled={!canSubmit}
              className='bg-[#4b4640] text-white rounded-full py-3 font-medium hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50'
              aria-label="Submit Message"
            >
              {isSubmitting ? 'Sending...' : 'Submit Message'}
            </button>
          </form>

          <div className='mt-4 lg:mt-8'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium'>Contact Information</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 mt-4 lg:mt-8 gap-4'>
              <div className='bg-[#0b0c10] p-4 rounded-2xl'>
                <p className='text-[#ae8755]'>Email Us</p>
                <a href="mailto:info@grouphimalaya.com" className='mt-4 text-lg hover:text-[#ae8755] transition-colors'>
                  info@grouphimalaya.com
                </a>
              </div>

              <div className='bg-[#0b0c10] p-4 rounded-2xl'>
                <p className='text-[#ae8755]'>Call Us</p>
                <a href="tel:+977061523848" className='mt-4 text-lg hover:text-[#ae8755] transition-colors'>
                  +977 061 523848
                </a>
              </div>

              <div className='bg-[#0b0c10] p-4 rounded-2xl'>
                <p className='text-[#ae8755]'>Visit Us</p>
                <address className='mt-4 text-lg not-italic'>
                  Nayabazar - 11, Pokhara
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default Contact
