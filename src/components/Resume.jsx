const Resume = () => {
  const education = [
    {
      title: 'Bachelor of Science in Software Engineering',
      period: 'Sep 2021 — Feb 2026',
      description: 'Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST), Islamabad. Focusing on software development, system design, and cybersecurity fundamentals.'
    },
    {
      title: 'Intermediate in Computer Science (ICS)',
      period: '2018 — 2020',
      description: 'Punjab College. Strong foundation in computer science fundamentals, mathematics, and programming concepts.'
    }
  ]

  const experience = [
    {
      title: 'Full-Stack MERN Developer',
      period: '2023 — Present',
      description: 'Developed multiple production-style applications including property listing platforms, inventory management systems, and POS systems with secure authentication and role-based access control.'
    },
    {
      title: '3D Web Developer',
      period: '2023 — Present',
      description: 'Created interactive 3D web experiences using Three.js including virtual property walkthroughs, house configurators, and product customization tools.'
    },
    {
      title: 'Cybersecurity Enthusiast',
      period: '2024 — Present',
      description: 'Learning application security fundamentals, OWASP Top 10, secure authentication practices, and API security. Seeking cybersecurity internship opportunities.'
    }
  ]

  const skills = [
    { name: 'MERN Stack', percentage: 90 },
    { name: 'Three.js & 3D Development', percentage: 85 },
    { name: 'API Development & Security', percentage: 80 },
    { name: 'Cybersecurity Fundamentals', percentage: 65 }
  ]

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage}>{skill.percentage}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Resume