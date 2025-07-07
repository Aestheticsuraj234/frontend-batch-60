import Card from "./Card";
import H1 from "./H1";

function App() {
  return (
    // <H1/>
    <>
      <Card
        imageUrl={
          "https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/d5826514d7df76b2b9524d5819d3e1d5?_a=AQAEulh"
        }
        title={"AI-powered receipt & invoice extraction for developers"}
        description={
          "Well Extract is a lightweight, open-source CLI tool that uses AI to extract structured data from invoices and receipts. It supports multiple AI models including OpenAI, Anthropic, Gemini, and Ollama, runs locally, and outputs data in JSON format. The tool is designed specifically for developers who need to integrate document processing into their applications."
        }
      />

         <Card
        imageUrl={
          "https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/43a16de6cd0a26376628a9bd197bed87?_a=AQAEulh"
        }
        title={"CI/CD Best Practices for Microservice Architecture"}
        description={
          "Traditional CI/CD pipelines fail to scale with microservices architecture. Each microservice requires isolated pipelines with independent versioning, progressive deployment strategies like canary and blue/green deployments, proper access controls, and comprehensive observability. Key principles include service-level pipeline"
        }
      />
    </>
  );
}

export default App;
