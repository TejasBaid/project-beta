
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Table } from './components/table/Table';
import { Testimonials } from './components/testimonials/Testimonials';
import { Toppers } from './components/toppers/Toppers';
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <div className="tlist">
        <h1>School Toppers</h1>
          <Toppers />
          
        </div>
      <div style={{marginTop: "100px" }}>
        <div className="table-container-box"><Table /></div>
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
