import blog1 from '../assets/images/blog-1.jpg'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'
import blog4 from '../assets/images/blog-4.jpg'
import blog5 from '../assets/images/blog-5.jpg'
import blog6 from '../assets/images/blog-6.jpg'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'MERN Stack Security Best Practices',
      category: 'Development',
      date: '2024-01-15',
      dateText: 'Jan 15, 2024',
      excerpt: 'Essential security practices for MERN stack applications including authentication, authorization, and data protection.',
      image: blog1,
      link: '#'
    },
    {
      id: 2,
      title: 'Three.js Performance Optimization',
      category: 'Development',
      date: '2024-01-10',
      dateText: 'Jan 10, 2024',
      excerpt: 'Techniques for optimizing 3D web applications and improving rendering performance in Three.js projects.',
      image: blog2,
      link: '#'
    },
    {
      id: 3,
      title: 'API Security Fundamentals',
      category: 'Security',
      date: '2024-01-05',
      dateText: 'Jan 05, 2024',
      excerpt: 'Understanding REST API security, authentication methods, and protecting against common vulnerabilities.',
      image: blog3,
      link: '#'
    },
    {
      id: 4,
      title: 'Role-Based Access Control Implementation',
      category: 'Development',
      date: '2023-12-20',
      dateText: 'Dec 20, 2023',
      excerpt: 'Building secure role-based access control systems in Node.js applications with proper authorization.',
      image: blog4,
      link: '#'
    },
    {
      id: 5,
      title: 'OWASP Top 10 for Developers',
      category: 'Security',
      date: '2023-12-15',
      dateText: 'Dec 15, 2023',
      excerpt: 'Understanding and preventing the most critical web application security risks according to OWASP.',
      image: blog5,
      link: '#'
    },
    {
      id: 6,
      title: 'Building Interactive 3D Configurators',
      category: 'Development',
      date: '2023-12-10',
      dateText: 'Dec 10, 2023',
      excerpt: 'Creating engaging product configurators using Three.js for enhanced user experience and customization.',
      image: blog6,
      link: '#'
    }
  ]

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post) => (
            <li key={post.id} className="blog-post-item">
              <a href={post.link}>
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.dateText}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Blog