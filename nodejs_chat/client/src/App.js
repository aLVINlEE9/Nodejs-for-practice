import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import { useState } from "react"
// Page
import MainPage from './component/page/MainPage';
import LoginPage from './component/page/LoginPage';
import ChatPage from './component/page/ChatPage';
import NotFound from './component/page/NotFound';
// import { connection } from "./socket";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weigth: bold;
  text-align: center;
`;




function App() {
  const [allUserData, setAllUserData] = useState([]);
  const updateUserData = (allUserData) => {
    setAllUserData(allUserData);
  }

  return (
    <BrowserRouter>
      <MainTitleText>chat program</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage updateUserData={updateUserData}/>} />
        <Route path="chat" element={<ChatPage allUserData={allUserData}/>} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
