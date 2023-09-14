import { useEffect, useState } from "react";
import Header from "./components/Header";
import Schedule from "./components/Schedule";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='main-wrapper'>
      <div className='container'>
        <Header />
        <Schedule setData={setData} />
      </div>
    </div>
  );
}

export default App;