import React from 'react';

function CopyButton(props) {



  const handleCopy = () => {
    navigator.clipboard.writeText(props.text);
  };


      
 


  return (
    <button className='h-8  w-8 bg-white px-2 mt-2 rounded-lg  hover:scale-125 duration-300 delay-150 transition' onClick={handleCopy}>
    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' width={20} height={20} alt='fotogmail' />
    </button>
  );
}

export default CopyButton;
