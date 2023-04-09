import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spline from '@splinetool/react-spline';
import icons from './icons.json'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import EmailCopy from './EmailCopy';

 const Inicio = () => {

  library.add(faGithub, faLinkedin);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-back', 
      delay: 100, 
      once: true, 
    });
  }, []);


  return (
    <>
<div className="navbar  bg-white fixed z-50 text-black shadow-xl flex item-center justify-center">
  <a href='#inicio' className="btn btn-ghost normal-case text-sm smooth-scroll">INICIO</a>
  <a href='#sobremi' className="btn btn-ghost normal-case text-sm smooth-scroll">SOBRE MI</a>
  <a href='#habilidades' className="btn btn-ghost normal-case text-sm smooth-scroll">HABILIDADES</a>
  <a href='#contacto' className="btn btn-ghost normal-case text-sm smooth-scroll">CONTACTO</a>

    <ul className="menu menu-horizontal">
      <li tabIndex={0}>
        <a className='btn btn-ghost normal-case text-sm smooth-scroll'>
          CERTIFICADOS
        </a>
        <ul className="p-2 bg-white text-sm normal-case border-lg">
          <li><a href='https://www.coderhouse.com.uy/certificados/6364e18c6069aa000e8f2242'>Front End
          <span className="badge bg-gray-700 text-white">Top 10</span>
          </a></li>
          <li><a href='https://www.coderhouse.com.uy/certificados/6364e18c6069aa000e8f223f'>React</a></li>
          <li><a href='https://www.coderhouse.com.uy/certificados/63331d85c1fa9e00246ec1e0'>Javascript</a></li>
        </ul>
      </li>
    </ul>
  
</div>
<div className=' bg-white text-center py-52' id='inicio'>
  <div className='w-full h-screen'>
    
    <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='py-2 text-black text-3xl'>Hola, soy
      <span className='text-black text-3xl '> < b className='text-[#153153]'  >Lucio Schiavoni</b></span>
      <br />
      <span className='text-black text-3xl ' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" >Desarrollador Full Stack</span>
    </h1> <div className='text-4xl space-x-6 mt-20'>
      <a href='https://github.com/LucioSchiavoni'>
<FontAwesomeIcon icon={faGithub} className='text-black hover:scale-125 duration-300 delay-150' /> 
</a>
<a href='https://www.linkedin.com/in/lucio-schiavoni-a67a82238/'>
      <FontAwesomeIcon icon={faLinkedin} className='text-[#153153] hover:scale-125 duration-300 delay-150'/>
      </a>
     
    </div>
  </div>
  
  <div className='mt-20 h-screen  grid grid-cols-2 gap-4 shadow-xl mb-80  bordered-lg card' id='sobremi'>
  
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='text-2xl w-11/12 mt-20 ml-20 text-black' >
        <p className='mb-5' >Mi nombre es Lucio, tengo 24 años y curso mi ultimo año de Informatica en UTU "Arias Balparda" de la ciudad de Montevideo. Me especializo en la orientación de desarrollo de Software y desarrollador Fullstack, esto ultimo en una academia virtual llamada Coderhouse.</p>

<p className='mb-5' > Soy autodidacta y disfruto mucho creando proyectos cliente/servidor. También soy un apasionado de las finanzas, lo que me llevó a adentrarme en el mundo del blockchain y la web3, donde me gusta explorar y crear proyectos descentralizados.
</p>
<p>Gracias por visitar mi portafolio y espero tener la oportunidad de trabajar con su empresa en el futuro. 
  Si tiene alguna pregunta o está interesado en conocer más sobre mi experiencia y habilidades, no dude en ponerse en contacto conmigo.</p>
 
  </div>
  <div  data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"  className='py-20 mt-10 ml-32'>
<Image src="/img.jpeg" alt='foto' width={350} height={350}  />
</div>
  </div>

 
<div id='habilidades' >

  <h2  className='text-3xl text-black text-start mt-20 ml-20'>Habilidades</h2>
   <p  className='mb-5 text-2xl text-black text-start ml-20'>¿Qué puedo hacer?</p>
  <div className='grid grid-cols-3 gap-4 w-[1240px] m-auto border-black'>
   
  {
    icons.map((icons) => {
      return(

      <div className='flex card w-11/12 bg-white  hover:scale-125 shadow-xl border-transparent  bordered-lg center-items justify-center text-2xl border transition hover:delay-150 duration-300 ease-in-out p-4 text-black gap-3' > 
      <img className='w-20' src={icons.foto} alt="foto" />
         <p className='font-mono font-bold' >{icons.nombre} </p>  
          </div>
      )
    })
  }

</div>
 </div>
<div className='mt-20 grid grid-cols-2 flex flex-center ml-96 ' id='contacto'> 


  <form className=' border-lg px-12 text-start  my-8 bg-white '  action='https://getform.io/f/82c66796-df04-4395-bc19-aecfd4b660c1' method='POST'>
<div className='form-control   mt-5 mb-4' >
  <h2 className='mb-5 grid grid-cols-2 mb-32text-3xl font-mono text-[#153153]'> Contacta conmigo </h2> 
  <label className='mb-2 font-mono text-[#153153]'>Nombre</label>
  <input className='input input-bordered input-accent w-7/12 h-10 bg-white' placeholder='Nombre' type='text' name='name' required/>
</div>
<div className='form-control text-black text-small mb-4' >
  <label className='mb-2 font-mono text-[#153153]'>Email</label>
    <input className='input input-bordered input-accent  w-7/12  h-10 bg-white' placeholder='Email' type='email' name='email' required/>
</div>
<div className='form-control text-black mb-4' >
  <label className='mb-2 font-mono text-[#153153]'>Mensaje</label>
  <textarea className='input input-bordered input-accent  h-40 w-80 bg-white py-4' name='message' required/>
</div>

<button type='submit' className='btn btn-accent hover:scale-125 mt-5 mb-5'>Enviar</button>

  

  </form>

  <div className='mt-20 '>  <label className='text-small font-mono mb-2 text-black'>Copia mi Gmail</label>
 <EmailCopy/></div>

</div>

</div>


</>
  )
}

export default Inicio;