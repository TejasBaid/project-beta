
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Testimonials } from './components/testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop: "80px" }}>
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
