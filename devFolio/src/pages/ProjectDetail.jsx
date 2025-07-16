
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Calendar, User } from 'lucide-react';

const ProjectDetail = () => {
  // React Router DOM hooks for accessing URL parameters and navigation
  const { id } = useParams(); // Extract project ID from URL
  const navigate = useNavigate(); // For programmatic navigation

  // Mock project data - in a real app, this would come from an API or database
  const projectData = {
    '1': {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution built from the ground up with modern technologies. This project demonstrates full-stack development capabilities including user authentication, product management, shopping cart functionality, and secure payment processing.",
      longDescription: "This e-commerce platform is a complete solution that handles everything from product browsing to order fulfillment. The frontend is built with React and TypeScript for type safety and better developer experience. The backend uses Node.js with Express for the API layer and PostgreSQL for data persistence. Payment processing is handled through Stripe integration, ensuring secure transactions. The application also features real-time inventory management, order tracking, and an admin dashboard for managing products and orders.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Stripe", "Tailwind CSS", "JWT"],
      category: "Full Stack",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      startDate: "2023-06-01",
      endDate: "2023-09-15",
      teamSize: "3 developers",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality", 
        "Secure payment processing with Stripe",
        "Order management and tracking",
        "Admin dashboard for inventory management",
        "Responsive design for all devices",
        "Real-time notifications"
      ],
      challenges: [
        "Implementing secure payment processing while maintaining good UX",
        "Optimizing database queries for large product catalogs",
        "Building a responsive design that works across all devices",
        "Managing state effectively across a complex application"
      ]
    },
    '2': {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      longDescription: "This task management application was designed to improve team productivity and collaboration. Built with React and Firebase, it offers real-time synchronization across all connected devices. The drag-and-drop interface makes it easy to organize tasks and update their status. The application supports team workspaces, project organization, and detailed task tracking with comments and file attachments.",
      technologies: ["React", "Firebase", "TypeScript", "Material-UI", "React DnD"],
      category: "Frontend",
      image: "/placeholder.svg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      startDate: "2023-03-01",
      endDate: "2023-05-30",
      teamSize: "Solo project",
      features: [
        "Real-time task synchronization",
        "Drag-and-drop task organization",
        "Team collaboration and comments",
        "File attachments and media support",
        "Project and workspace management",
        "Task priorities and due dates",
        "Progress tracking and analytics",
        "Mobile-responsive interface"
      ],
      challenges: [
        "Implementing smooth drag-and-drop functionality",
        "Managing real-time data synchronization",
        "Creating an intuitive user interface",
        "Optimizing performance for large task lists"
      ]
    }
  };

  // Get project data based on ID from URL parameters
  const project = projectData[id || ''];

  // Handle case where project is not found
  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/projects')} className="bg-primary text-primary-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/projects')}
          className="mb-8 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Project Image */}
            <div className="lg:w-1/2">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 lg:h-80 object-cover rounded-lg border border-border"
              />
            </div>

            {/* Project Info */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {project.title}
                  </h1>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Meta */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{project.startDate} - {project.endDate}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <User className="h-5 w-5 text-primary" />
                  <span>{project.teamSize}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <Card className="mb-8 bg-background border-border">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </CardContent>
        </Card>

        {/* Technologies Used */}
        <Card className="mb-8 bg-background border-border">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="text-sm border-primary/20 text-primary/80 px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="mb-8 bg-background border-border">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Challenges */}
        <Card className="bg-background border-border">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{challenge}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;
