
import "./App.css";

import { getPosts } from "./Components/Services";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <h1>Loading Data....</h1>;
  }

  if (error) {
    return <h1>Error Fetching Data : {error.message}</h1>;
  }
  console.log(data);
  return (
    <div className="App">
      {/* <Forms/> */}
      <div className="apiBox">
        {data.map((data, idx) => {
          return (
            <div key={idx}>
              <h1>{data.id}</h1> 
              <h1>{data.title} </h1>
              <p> {data.body} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
