import React, { useState } from 'react';
import { ModeToggle } from '../darkMode';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const buttonClassName = isClicked ? 'bg-purple-400' : 'bg-black-500';

  const onClickToggle = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <div onClick={onClickToggle} className='flex justify-end '>
      <ModeToggle />
      <div>
        <button
          className={`${
            isClicked ? 'bg-purple-500' : 'bg-red-500'
          } text-cyan-400`}
          onClick={onClickToggle}
        >
          버튼
        </button>
      </div>
    </div>
  );
};

export default Header;
