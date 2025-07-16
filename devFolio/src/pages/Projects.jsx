
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  // React Router DOM hook for navigation
  const navigate = useNavigate();
  
  // State for filtering projects
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      category: "Full Stack",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      id: 2,
      title: "Task Management App", 
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "TypeScript", "Material-UI"],
      category: "Frontend",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using third-party APIs with beautiful data visualizations.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      category: "Frontend",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      id: 4,
      title: "Blog API",
      description: "A RESTful API for a blog platform with authentication, CRUD operations, and database relationships. Includes comprehensive testing and documentation.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Jest"],
      category: "Backend",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and modern design principles. Features smooth animations and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      id: 6,
      title: "Real-time Chat App",
      description: "A real-time messaging application with WebSocket connections, user authentication, and multiple chat rooms functionality.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      category: "Full Stack",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    }
  ];

  // Filter categories
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

  // Filter projects based on selected category
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  // Function to handle project detail navigation
  // This demonstrates how to navigate with route parameters
  const handleViewProject = (projectId) => {
    // Navigate to a project detail page with the project ID as a parameter
    // This would be a route like /projects/:id
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedFilter === category ? "default" : "outline"}
              onClick={() => setSelectedFilter(category)}
              className={selectedFilter === category 
                ? "bg-primary text-primary-foreground" 
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-background border-border hover:shadow-lg transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleViewProject(project.id)}
                    className="bg-white/90 text-black hover:bg-white"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="text-xs border-primary/20 text-primary/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
