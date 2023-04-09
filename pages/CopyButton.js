import React from 'react';

function CopyButton(props) {



  const handleCopy = () => {
    navigator.clipboard.writeText(props.text);
  };


      
 


  return (
    <button className='btn hover:grayscale' onClick={handleCopy}>
    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' width={20} height={20} alt='fotogmail' />
    </button>
  );
}

export default CopyButton;
