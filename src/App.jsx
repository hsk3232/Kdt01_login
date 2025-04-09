import Login from "./componets/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './componets/Home';
import Nav from './componets/Nav';
import Subway from './componets/Subway';


function App() {
  return (

    <BrowserRouter>
    <div className="w-full xl:w-8/10 h-screen mx-auto flex flex-col">
      <Nav />
   
     
    <main className="w-full pt-10 flex flex-grow flex-col justify-start items-center overflow-y-auto"> 
    

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/subway' element={<Subway />} />
        </Routes>
    

    </main>

    <footer className="w-full min-h-20 bg-gray-200 px-10 inline-flex justify-between items-center">
      <h3 className="m-10 flex justify-start">[K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정</h3>
      <h4 className="m-5 inline-flex justify-between"> ☎️ 051-512-0311  | ✉️ www.pusan.ac.kr </h4>
    </footer>

    </div>
    

    </BrowserRouter>
    

  )
}

export default App
