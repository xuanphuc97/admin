import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import AdminNav from './components/navbar/AdminNav'
import Createproblem from './components/createproblem/Createproblem'

function App() {
  return (
    <div className="app">
      <AdminNav />
      <Sidebar />
      <Createproblem className="cp"></Createproblem>
      <footer></footer>

    </div>
  );
}

export default App;
