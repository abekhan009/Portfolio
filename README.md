# Personal Portfolio - React Version

This is a React implementation of the vCard personal portfolio template. The original HTML/CSS/JS template has been converted to a modern React application with component-based architecture.

## Features

- **Responsive Design**: Mobile-first approach with responsive layout
- **Single Page Application**: Smooth navigation between sections
- **Interactive Components**: 
  - Collapsible sidebar with contact information
  - Filterable portfolio gallery
  - Testimonials modal
  - Contact form with validation
- **Modern React Patterns**: Functional components with hooks

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx      # Personal info and contact details
│   ├── Navbar.jsx       # Navigation between sections
│   ├── About.jsx        # About section with services and testimonials
│   ├── Resume.jsx       # Education, experience, and skills
│   ├── Portfolio.jsx    # Filterable project gallery
│   ├── Blog.jsx         # Blog posts listing
│   └── Contact.jsx      # Contact form and map
├── assets/
│   ├── css/
│   │   └── style.css    # Original CSS styles
│   └── images/          # All portfolio images and icons
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## Sections

1. **About**: Personal introduction, services offered, testimonials, and client logos
2. **Resume**: Education timeline, work experience, and skill progress bars
3. **Portfolio**: Filterable project gallery with categories (Web Design, Applications, Web Development)
4. **Blog**: Blog posts with images and excerpts
5. **Contact**: Interactive map and contact form

## Technologies Used

- React 19.2.0
- Vite (build tool)
- CSS3 with custom properties
- Ionicons for icons
- Google Fonts (Poppins)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Original Template

This React version maintains the exact design and functionality of the original vCard template while providing better maintainability and modern development experience.