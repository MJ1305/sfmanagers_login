import { useState } from 'react';
import { FiLock, FiUnlock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaWifi } from "react-icons/fa";
import Chipimg from '../assets/images/chipimg3.jpg'
import Footer from './shared/footer';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setIsLocked(!isLocked);
  };

  return (
    <div className="w-[35rem] max-w-2xl">
      {/* Horizontal ATM Card */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-2xl p-6 border-2 border-blue-400 border-opacity-30">
        <div className='p-1'>
          <h1 className='text-white text-[1.3rem] px-[1rem] font-bold flex justify-end'>SF MANAGERS</h1>          
          <div className='flex items-center justify-between my-2'>
            <img className='rounded-md my-3 w-12' src={Chipimg} alt="" />        
            <div className='text-white flex justify-around w-[6rem] text-[1.5rem]'>              
              <div className='rotate-85'>
                <FaWifi/>
              </div>
              <p className=''>12234</p>
            </div>
          </div>
          <div className='border-blue-400 border rounded-md px-1 my-2'>
            <h3 className='text-white font-mono text-[1.6rem]'>3759 876543 21001</h3>
          </div>
          {/*Section 2 - Login Form */}
          <div className="flex flex-col justify-center items-end">
            <div className="w-90">
              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b rounded-md border-blue-400 py-2 text-white placeholder-blue-300 focus:outline-none"
                  placeholder="ENTER EMAIL"
                />
                <div className="absolute right-0 top-2 text-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>

              {/* Password Field with Toggle */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b rounded-md border-blue-400 py-2 text-white placeholder-blue-300 focus:outline-none pr-8"
                  placeholder="ENTER PIN"
                />
                <div className="absolute right-0 top-2 flex space-x-1">
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility}
                    className="text-blue-300 hover:text-white transition-colors"
                  >
                    {isLocked ? (
                      <FiLock className="h-5 w-5" />
                    ) : (
                      <FiUnlock className="h-5 w-5" />
                    )}
                  </button>                  
                </div>
              </div>              
            </div>
            <div className=' w-full mt-3 flex justify-between items-center'>                
                <h1 className='text-white text-[1rem] font-serif'>SFORGER GROUP</h1>                
                <button className="w-35 border  bg-blue-600 hover:bg-blue-500 text-white py-1 rounded-lg transition">
                  AUTHENTICATE
                </button>
              </div>
          </div>
        </div>

        {/* Card Footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default LoginCard;