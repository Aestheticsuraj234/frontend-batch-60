import React from 'react'

import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    const handleViewProjects = ()=>{
        navigate("/projects")
    }

    const handleGetInTouch = ()=>{
        navigate("/contact")
    }


  return (
    <div className='min-h-screen bg-background'>
          <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-primary">Alex Johnson</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A passionate full-stack developer creating beautiful, functional web experiences 
            with modern technologies and clean code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleViewProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              onClick={handleGetInTouch}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Frontend Development
                </h3>
                <p className="text-muted-foreground">
                  Building responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Backend Development
                </h3>
                <p className="text-muted-foreground">
                  Creating robust APIs and server-side applications with Node.js, Express, and database technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  UI/UX Design
                </h3>
                <p className="text-muted-foreground">
                  Designing intuitive user experiences with attention to accessibility, usability, and visual appeal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your next project and bring your ideas to life.
          </p>
          <Button 
            onClick={handleGetInTouch}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home