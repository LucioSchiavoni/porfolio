import React from 'react';
import CopyButton from './CopyButton';

function EmailCopy() {
  const textToCopy = 'luciosc1798@gmail.com';

  return (
    <div className=' p-2 m-auto w-52 h-10'>
    
      <button src='' className='btn'><CopyButton  text={textToCopy} className="" /></button>
      
    </div>
  );
}

export default EmailCopy;
