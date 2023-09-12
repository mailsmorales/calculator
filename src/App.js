import Footer from "./components/Footer";
import Header from "./components/Header";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="main-wrapper">
      <div className="container">
        <Header />
        <Schedule />
        <Footer />
      </div>
    </div>
  );
}

export default App;
