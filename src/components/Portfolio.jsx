import { useState } from 'react'
import project1 from '../assets/images/project-1.jpg'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.jpg'
import project4 from '../assets/images/project-4.png'
import project5 from '../assets/images/project-5.png'
import project6 from '../assets/images/project-6.png'
import project7 from '../assets/images/project-7.png'
import project8 from '../assets/images/project-8.jpg'
import project9 from '../assets/images/project-9.png'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'Visionary Spaces',
      category: 'web development',
      image: project1,
      link: 'https://visionary-spaces-fyp-tcq4.vercel.app/'
    },
    {
      id: 2,
      title: '3D Virtual Walkthrough',
      category: 'web development',
      image: project2,
      link: '#'
    },
    {
      id: 3,
      title: 'House Configurator',
      category: '3d applications',
      image: project3,
      link: '#'
    },
    {
      id: 4,
      title: 'T-Shirt Configurator',
      category: '3d applications',
      image: project4,
      link: '#'
    },
    {
      id: 5,
      title: 'Inventory Management System',
      category: 'web development',
      image: project5,
      link: '#'
    },
    {
      id: 6,
      title: 'Point of Sale (POS) System',
      category: 'web development',
      image: project6,
      link: '#'
    },
    {
      id: 7,
      title: 'MERN Authentication System',
      category: 'web development',
      image: project7,
      link: '#'
    },
    {
      id: 8,
      title: 'Role-Based Access Control',
      category: 'web development',
      image: project8,
      link: '#'
    },
    {
      id: 9,
      title: 'RESTful API Development',
      category: 'web development',
      image: project9,
      link: '#'
    }
  ]

  const filterCategories = ['All', 'Web development', '3D applications', 'Cybersecurity']

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const handleFilterClick = (filter) => {
    setActiveFilter(filter.toLowerCase())
  }

  const handleSelectClick = (filter) => {
    setActiveFilter(filter.toLowerCase())
    setIsSelectOpen(false)
  }

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filter buttons for desktop */}
        <ul className="filter-list">
          {filterCategories.map((category) => (
            <li key={category} className="filter-item">
              <button
                className={activeFilter === category.toLowerCase() ? 'active' : ''}
                onClick={() => handleFilterClick(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Filter select for mobile */}
        <div className="filter-select-box">
          <button 
            className={`filter-select ${isSelectOpen ? 'active' : ''}`}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            data-select
          >
            <div className="select-value">
              {filterCategories.find(cat => cat.toLowerCase() === activeFilter) || 'Select category'}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {filterCategories.map((category) => (
              <li key={category} className="select-item">
                <button onClick={() => handleSelectClick(category)} data-select-item>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project list */}
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Portfolio