import React from 'react'
import Navigation from './components/Navigation'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Projects from './pages/Projects'


const App = () => {
  return (
    <>
    <Navigation/>

    {/* Routes: container for all our routed definations
      each route components defines a path and the components to render
    */}
        <Routes>
          {/* Home route - displays when user visits "/" */}
          <Route path="/" element={<Home />} />
          
          {/* About route - displays when user visits "/about" */}
          <Route path="/about" element={<About />} />
          
          {/* Projects route - displays when user visits "/projects" */}
          <Route path="/projects" element={<Projects />} />
          
          {/* 
            Project detail route with parameter - displays when user visits "/projects/:id"
            The :id is a route parameter that can be accessed using useParams hook
            Example: /projects/1, /projects/2, etc.
          */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
          
          {/* Contact route - displays when user visits "/contact" */}
          <Route path="/contact" element={<Contact />} />
          
          {/* 
            Catch-all route for 404 errors
            The "*" path matches any route that hasn't been matched above
            This should always be the last route
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App