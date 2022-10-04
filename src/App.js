import logo from './logo.svg';
import './App.css';
import Stories from './Components/Stories';
import Search from './Components/Search';
import Pagination from './Components/Pagination';

function App() {
  return (
    <>
    <Search/>
    <Pagination/>
      <Stories/>
    </>
  );
}

export default App;
