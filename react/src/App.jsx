import React, { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);

 const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchUserDetails(username) {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const profileData = await res.json();
      setData(profileData);
    }

    fetchUserDetails("aestheticsuraj234");
  }, []);

  // with deps
  // empty deps✅

  return <h1>the current time is {time}</h1>;
};

export default App;
