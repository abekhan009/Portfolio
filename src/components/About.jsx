import { useState } from 'react'
import iconDesign from '../assets/images/icon-design.svg'
import iconDev from '../assets/images/icon-dev.svg'
import iconApp from '../assets/images/icon-app.svg'
import iconPhoto from '../assets/images/icon-photo.svg'
import iconQuote from '../assets/images/icon-quote.svg'
import avatar1 from '../assets/images/avatar-1.png'
import avatar2 from '../assets/images/avatar-2.png'
import avatar3 from '../assets/images/avatar-3.png'
import avatar4 from '../assets/images/avatar-4.png'
import logo1 from '../assets/images/logo-1-color.png'
import logo2 from '../assets/images/logo-2-color.png'
import logo3 from '../assets/images/logo-3-color.png'
import logo4 from '../assets/images/logo-4-color.png'
import logo5 from '../assets/images/logo-5-color.png'
import logo6 from '../assets/images/logo-6-color.png'

const About = () => {
  const [modalData, setModalData] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      icon: iconDev,
      title: 'MERN Stack Development',
      description: 'Full-stack web applications using MongoDB, Express.js, React.js, and Node.js with secure authentication.'
    },
    {
      icon: iconApp,
      title: '3D Web Experiences',
      description: 'Interactive 3D applications and virtual walkthroughs using Three.js and WebGL technologies.'
    },
    {
      icon: iconDesign,
      title: 'API Development',
      description: 'RESTful APIs with role-based access control and secure authentication systems.'
    },
    {
      icon: iconPhoto,
      title: 'Cybersecurity Focus',
      description: 'Learning application security, OWASP Top 10, and secure system design practices.'
    }
  ]

  const testimonials = [
    {
      avatar: avatar1,
      name: 'Tech Lead',
      text: 'Abdullah demonstrated exceptional skills in MERN stack development. His ability to create secure, scalable applications with proper authentication systems is impressive. His interest in cybersecurity adds valuable perspective to development practices.'
    },
    {
      avatar: avatar2,
      name: 'Project Manager',
      text: 'Working with Abdullah on the 3D virtual walkthrough project was amazing. His expertise in Three.js and ability to create immersive web experiences exceeded our expectations. Highly recommended for complex web applications.'
    },
    {
      avatar: avatar3,
      name: 'Senior Developer',
      text: 'Abdullah\'s understanding of full-stack development is solid. His work on inventory management and POS systems shows great attention to security and user experience. His transition focus to cybersecurity is well-founded.'
    },
    {
      avatar: avatar4,
      name: 'Cybersecurity Mentor',
      text: 'Abdullah\'s development background gives him a unique advantage in understanding application security. His eagerness to learn cybersecurity concepts and apply them practically makes him an ideal candidate for security roles.'
    }
  ]

  const clients = [logo1, logo2, logo3, logo4, logo5, logo6]

  const openModal = (testimonial) => {
    setModalData(testimonial)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalData(null)
  }

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi, I'm Abdullah Feroz Khan, a Web Developer based in Islamabad, Pakistan, with strong hands-on experience in the MERN stack and Three.js. I have built multiple real-world, production-style applications ranging from business systems to interactive 3D web experiences.
        </p>
        <p>
          While my core background is in web development, my long-term career goal is to transition into Cybersecurity. Working deeply with authentication systems, APIs, databases, and deployments has sparked my interest in application security and secure system design. I am currently seeking a Cybersecurity Internship where I can leverage my development background while growing into a security-focused role.
        </p>
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div className="content-card" onClick={() => openModal(testimonial)}>
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Modal */}
      {isModalOpen && modalData && (
        <div className={`modal-container ${isModalOpen ? 'active' : ''}`}>
          <div className="overlay" onClick={closeModal}></div>
          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={modalData.avatar} alt={modalData.name} width="80" />
              </figure>
              <img src={iconQuote} alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title">{modalData.name}</h4>
              <time dateTime="2021-06-14">14 June, 2021</time>
              <div>
                <p>{modalData.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Clients */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((client, index) => (
            <li key={index} className="clients-item">
              <a href="#">
                <img src={client} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default About