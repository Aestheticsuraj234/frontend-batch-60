import React, { useState, useEffect } from "react";
import Avatar from "./module/Profile/components/Avatar";
import InfoCard from "./module/Profile/components/InfoCard";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchUserDetails(username) {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const profileData = await res.json();
      setData(profileData);
    }

    fetchUserDetails("aestheticsuraj234");
  }, []);

  console.log(data);

  return (
    <main className="bg-zinc-900 w-full py-24 flex flex-col justify-start items-center min-h-screen h-full">
      <h1 className="text-5xl text-yellow-500 font-extrabold stroke-2">
        Welcome to Your Github Profile🔥
      </h1>

      <Avatar
        imageUrl={data.avatar_url}
        Name={data.name}
      />

      <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
        <InfoCard count={data.followers} title={"Followers"} />
        <InfoCard count={data.following} title={"Following"} />
        <InfoCard count={data.public_repos} title={"Repos"} />
      </div>
    </main>
  );
};

export default App;

// import Card from "./Card";
// import H1 from "./H1";

// function App() {
//   return (
//     // <H1/>
//     <>
//       <Card
//         imageUrl={
//           "https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/d5826514d7df76b2b9524d5819d3e1d5?_a=AQAEulh"
//         }
//         title={"AI-powered receipt & invoice extraction for developers"}
//         description={
//           "Well Extract is a lightweight, open-source CLI tool that uses AI to extract structured data from invoices and receipts. It supports multiple AI models including OpenAI, Anthropic, Gemini, and Ollama, runs locally, and outputs data in JSON format. The tool is designed specifically for developers who need to integrate document processing into their applications."
//         }
//       />

//          <Card
//         imageUrl={
//           "https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/43a16de6cd0a26376628a9bd197bed87?_a=AQAEulh"
//         }
//         title={"CI/CD Best Practices for Microservice Architecture"}
//         description={
//           "Traditional CI/CD pipelines fail to scale with microservices architecture. Each microservice requires isolated pipelines with independent versioning, progressive deployment strategies like canary and blue/green deployments, proper access controls, and comprehensive observability. Key principles include service-level pipeline"
//         }
//       />
//     </>
//   );
// }

// export default App;
