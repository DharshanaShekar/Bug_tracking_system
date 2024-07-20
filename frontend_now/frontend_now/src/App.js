import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './login';
import Sidebar2 from './sidebar';
import ViewBugs from './viewBugs';
import CreateBugs from './createbug';
import Dashboard from './dashboard';
import BugListPage from './bugListPage';
import ShowBugs from './showBug';

function App() {
  return (
    <Routes>
      <Route path='/' Component={()=> <Login/>}/>
      <Route path='/sidebar' Component={()=><Sidebar2/>}/>
      <Route path='/viewbugs' Component={()=><ViewBugs/>}/>
      <Route path='/create' Component={()=><CreateBugs/>}/>
      <Route path='/view' Component={()=><Dashboard/>}/>
      <Route path="/bugs/:priority" element={<BugListPage />} /> 
      <Route path='/viewBug' Component={()=><ShowBugs/>}/>
    </Routes>
  );
}

export default App;
