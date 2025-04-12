
import { RiLogoutBoxLine } from "react-icons/ri";
import { useAtom } from 'jotai'
import { isLogin } from '../atoms/IsLoginAtom'
import { Link } from 'react-router-dom'
import { RiLoginBoxFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

export default function Nav() {
  //로그인이 됐을 때만 지하철 대기정보가 보여야 함으로 전역 변수를 가져옴.
  const [login, setLogin] = useAtom(isLogin);

  //로그아웃 버튼을 누르면, 핸들클릭이 일어나고 
  const handleClick = () => {
    //조타이 아톰(전역변수)이 false로 바뀜
    setLogin(false);
    //Application에 저장된 아이디를 삭제
    localStorage.setItem("email", "");

  }


  return (
    <header className="w-full min-h-20 bg-gray-950 px-10 flex justify-between items-center">

      <h1 className="w-fit flex text-4xl font-bold text-amber-50">KDT01 👻</h1>

      <div className='fit flex'>
        <ul className='flex justify-center items-center text-white'>
          <li className='flex mx-1 p-2 rounded-sm  text-white font-bold text-2xl hover:bg-white hover:text-black'>
            <Link to="/"><FaHome /></Link>
          </li>
          {login &&
            <li className='flex mx-1 p-2 rounded-sm hover:bg-white hover:text-black'>
              <Link to="/subway">지하철대기정보</Link>
            </li>
          }
          {login &&
            <li className='flex mx-1 p-2 rounded-sm hover:bg-white hover:text-black'>
              <Link to="/todolist">투두리스트</Link>
            </li>
          }
        </ul>
        <div className='w-30 p-2 flex flex-col justify-between items-center text-white rounded-sm hover:cursor-pointer hover:bg-white hover:text-black'>
          {/* 리턴문 안에서는 if문을 못쓰기 때문에 3항연산자를 씀 */}
          {login ? <span className="flex items-center gap-1" onClick={handleClick}><RiLogoutBoxLine />로그아웃 </span>
            : <span className="flex items-center gap-1"> <RiLoginBoxFill />로그인</span>
          }
        </div>

      </div>




    </header>
  )
}
