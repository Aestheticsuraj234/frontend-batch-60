
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        console.error("404 Error: User attempted to access non-existent route:" , location.pathname)
    },[location.pathname])

    const goBack = ()=>{
        navigate(-1);
    }

    const goHome = ()=>{
        navigate("/")
    }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="max-w-md mx-auto text-center px-4">
      {/* 404 Error Display */}
      <div className="mb-8">
        <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-muted-foreground text-sm">
          The page at <code className="bg-muted px-2 py-1 rounded text-primary">{location.pathname}</code> could not be found.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={goHome}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Home className="h-4 w-4 mr-2" />
          Go Home
        </Button>
        <Button 
          variant="outline"
          onClick={goBack}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Go Back
        </Button>
      </div>

      {/* Helpful Links */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-muted-foreground text-sm mb-4">
          You might be looking for:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="link" onClick={() => navigate('/')} className="text-primary">
            Home
          </Button>
          <Button variant="link" onClick={() => navigate('/about')} className="text-primary">
            About
          </Button>
          <Button variant="link" onClick={() => navigate('/projects')} className="text-primary">
            Projects
          </Button>
          <Button variant="link" onClick={() => navigate('/contact')} className="text-primary">
            Contact
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NotFound