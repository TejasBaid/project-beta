
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Testimonials } from './components/testimonials/Testimonials';
import { Toppers } from './components/toppers/Toppers';
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <div className="tlist">
          <Toppers />
          
        </div>
      <div style={{marginTop: "100px" }}>
        
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
