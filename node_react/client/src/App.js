import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import TestAPI from './components/TestAPI';
import TestWs from './components/TestWs';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  const callApi = async () => {
    axios.get("/testAPI").then((res) => console.log(res.data));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/testAPI" element={<TestAPI />}></Route>
          <Route path="/testWs" element={<TestWs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
