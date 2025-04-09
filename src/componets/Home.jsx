import { useAtom } from 'jotai';
import { isLogin } from '../atoms/IsLoginAtom';
import Login from './Login';
import train2 from '../assets/train2.jpg';
export default function Home() {
  const [login] = useAtom(isLogin);
  return (
    <div className='w-full h-full bg-[#201f23]'>
      {
        login ? <div className="flex min-h-full felx flex-col justify-between text-white lg:px-8">
          <h1 className="text-xl font-bold">
            <span className="text-blue-700">{`${localStorage.getItem('email')}`}</span>
            님 로그인이 되었습니다.
          </h1>
          <img src={train2} alt="지하철 대기정보" className="felx w-fit h-[60vh] object-cover object-[0_35%]" />
        </div>
          : <Login />
      }
    </div>
      
  )
}
