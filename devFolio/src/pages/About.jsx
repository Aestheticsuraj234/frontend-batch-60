
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  // Skills data organized by category
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack"]
    }
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description: "Lead frontend development for enterprise applications, mentor junior developers, and architect scalable React solutions."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022", 
      description: "Developed full-stack web applications using React, Node.js, and PostgreSQL. Collaborated with design teams to implement pixel-perfect UIs."
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Labs",
      period: "2019 - 2020",
      description: "Built responsive websites and web applications. Gained experience in modern JavaScript frameworks and agile development practices."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with over 4 years of experience creating 
            digital solutions that make a difference. Here's my story.
          </p>
        </div>

        {/* Personal Info */}
        <Card className="mb-12 bg-background border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Based in San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span>B.S. Computer Science, Stanford University</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span>4+ years of professional experience</span>
            </div>
            <p className="text-foreground mt-6 leading-relaxed">
              My passion for technology started early, and I've been fortunate to turn that passion into a career. 
              I specialize in creating user-centered digital experiences that combine beautiful design with robust functionality. 
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or enjoying the great outdoors.
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
