import React from 'react';

const Header = () => {
  return (
    <header className='text-center text-pretty flex flex-col justify-center gap-8'>
      <img src="/logo-full.svg" alt="Coding Conf logo" className='h-6'/>
      <div>
          <h1 className='text-xl md:text-6xl font-800 tracking-tight text-neutral-50 pb-1'>Your Journey to Coding Conf 2025 Starts Here!</h1>
          <p className='text-neutral-500 text-sm font-800'>Secure your spot at next year's biggest coding conference.</p>
      </div>
    </header>
  );
}

export default Header;
