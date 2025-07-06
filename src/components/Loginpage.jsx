import { useState, useRef, useEffect } from 'react';
import { FiLock, FiUnlock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaWifi } from "react-icons/fa";
import Chipimg from '../assets/images/chipimg3.jpg';
import Footer from './shared/footer';
import AmexBackground from '../assets/images/Amexlogo.png'; // Import the AMEX image

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const [isFrozen, setIsFrozen] = useState(false);
  const cardRef = useRef(null);

  // Tilt effect (unchanged)
  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      if (!isFrozen && card) {
        const xAxis = -(window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = -(window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    };

    const handleMouseLeave = () => {
      if (card) {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      }
    };

    const freezeCard = () => setIsFrozen(true);
    const unfreezeCard = () => setIsFrozen(false);

    card?.addEventListener('mousemove', handleMouseMove);
    card?.addEventListener('mouseleave', handleMouseLeave);
    
    const inputs = card?.querySelectorAll('input');
    inputs?.forEach(input => {
      input.addEventListener('focus', freezeCard);
      input.addEventListener('blur', unfreezeCard);
    });

    return () => {
      card?.removeEventListener('mousemove', handleMouseMove);
      card?.removeEventListener('mouseleave', handleMouseLeave);
      inputs?.forEach(input => {
        input.removeEventListener('focus', freezeCard);
        input.removeEventListener('blur', unfreezeCard);
      });
    };
  }, [isFrozen]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setIsLocked(!isLocked);
  };

  return (
    <div className="w-[35rem] max-w-2xl perspective-1000">
      <div 
        ref={cardRef}
        className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 rounded-xl shadow-2xl p-6 border-2 border-indigo-400 border-opacity-30 transition-transform duration-300 ease-out transform-style-preserve-3d relative overflow-hidden"
        style={{
          transform: 'rotateY(0deg) rotateX(0deg)',
          willChange: 'transform',
        }}
      >
        {/* AMEX Background Image - Only Addition */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5 z-0"
          style={{ backgroundImage: `url(${AmexBackground})` }}
        />

        <div className='p-1 relative z-10'>
          <h1 className='text-indigo-100 text-[1.3rem] px-[1rem] font-bold flex justify-end'>SFMANAGERS</h1>          
          <div className='flex items-center justify-between my-2'>
            <img className='rounded-md my-3 w-12' src={Chipimg} alt="" />        
            <div className='text-indigo-100 flex justify-around w-[6rem] text-[1.5rem]'>              
              <div className='rotate-85'>
                <FaWifi/>
              </div>
              <p className=''>12234</p>
            </div>
          </div>
          <div className='border-indigo-300 border rounded-md px-1 my-2'>
            <h3 className='text-indigo-100 font-mono text-[1.6rem]'>3759 876543 21001</h3>
          </div>
          
          {/* Login Form */}
          <div className="flex flex-col justify-center items-start">
            <div className="w-90">
              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-indigo-900/30 border-b rounded-md border-indigo-300 py-2 text-indigo-100 placeholder-indigo-300 focus:outline-none pl-2 pr-8"
                  placeholder="ENTER EMAIL"
                />
                <div className="absolute right-0 top-2 text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>

              {/* Password Field */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-indigo-900/30 border-b rounded-md border-indigo-300 py-2 text-indigo-100 placeholder-indigo-300 focus:outline-none pl-2 pr-8"
                  placeholder="ENTER PIN"
                />
                <div className="absolute right-0 top-2 flex space-x-9">
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility}
                    className="text-indigo-300 hover:text-indigo-100 transition-colors"
                  >
                    {isLocked ? (
                      <FiLock className="h-5 w-5" />
                    ) : (
                      <FiUnlock className="h-5 w-5" />
                    )}
                  </button>                  
                </div>
                <button className="w-35 border bg-indigo-700 hover:bg-indigo-600 text-indigo-50 py-1 rounded-lg transition mt-3">
                  AUTHENTICATE
                </button>
              </div>              
            </div>
            <div className='w-full mt-3 flex justify-between px-2'>                
              <h1 className='text-indigo-100 text-[1rem] font-serif'>SFORGER GROUP</h1>                              
            </div>
          </div>
          <Footer/>
        </div>        
      </div>
    </div>
  );
};

export default LoginCard;