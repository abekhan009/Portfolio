import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })
  const [isFormValid, setIsFormValid] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const updatedFormData = { ...formData, [name]: value }
    setFormData(updatedFormData)
    
    // Check if form is valid
    const isValid = updatedFormData.fullname.trim() !== '' && 
                   updatedFormData.email.trim() !== '' && 
                   updatedFormData.message.trim() !== ''
    setIsFormValid(isValid)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      console.log('Form submitted:', formData)
      // Handle form submission here
      alert('Message sent successfully!')
      setFormData({ fullname: '', email: '', message: '' })
      setIsFormValid(false)
    }
  }

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.5419155064!2d72.8009793!3d33.6844202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1647608789441!5m2!1sen!2s"
            width="400"
            height="300"
            loading="lazy"
            title="Islamabad, Pakistan location"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit} data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleInputChange}
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
            data-form-input
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid}
            data-form-btn
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}

export default Contact