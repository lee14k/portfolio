import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout'
import './App.scss';
import Home from './components/layout/Home/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element = {<Home/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
