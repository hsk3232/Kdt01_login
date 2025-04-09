import { useAtom } from 'jotai';
import { isLogin } from '../atoms/IsLoginAtom';
import Login from './Login';
import train3 from '../assets/train3.png';
export default function Home() {
  const [login] = useAtom(isLogin);
  return (
    <div className='w-full h-full bg-[#ffefc3]'>
      {
        login ? <div className=" p-10 flex min-h-full justify-between lg:px-8">
          <h1 className="text-xl font-bold">
            <span className="text-blue-700">{`${localStorage.getItem('email')}`}</span>
            님 로그인이 되었습니다.
          </h1>
          <div className="felx w-1/2 h-1/2 justify-center items-center">
          <img src={train3} alt="지하철 대기정보" className="object-cover" />
          </div>
        </div>
          : <Login />
      }
    </div>
      
  )
}
