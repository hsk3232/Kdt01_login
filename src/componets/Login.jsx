import TailButton from "./UI/TailButton";

export default function Login() {

    const handleChange = (e) => {
        e.preventDefault();
        console.log("로그인 버튼 클릭됨")
    }

    return (
        <div>
            
            <form className="max-w-sm mx-auto">
                <div class="mb-5">
                    <label for="email"
                            className="block mb-2 text-xl font-medium text-gray-900"> email</label>
                    <input type="email" id="email" 
                            className="bg-gray-50 border border-gray-300 
                                        text-gray-900 text-sm rounded-lg 
                                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                       " 
                            placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label for="password" 
                            className="block mb-2 text-xl font-medium text-gray-900">password</label>
                    <input type="password" id="password" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                       " required />
                </div>
                
                <TailButton caption="로그인" 
                            color="blue" 
                            onClick={() => {handleChange}} />
            </form>
        </div>
    )
}
