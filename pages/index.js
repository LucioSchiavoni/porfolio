
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Inicio from './Inicio';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
<Inicio/>
    </>
  )
}
