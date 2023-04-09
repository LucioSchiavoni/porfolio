import React from 'react';
import CopyButton from './CopyButton';

function EmailCopy() {
  const textToCopy = 'luciosc1798@gmail.com';

  return (
    <div className=''>
    
     <CopyButton  text={textToCopy} className="" />
      
    </div>
  );
}

export default EmailCopy;
