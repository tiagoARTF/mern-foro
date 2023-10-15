import {} from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-400'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold'>Forum App</h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to='/'>
                <li>Inicio</li>
                </Link>
                <Link to='/about'>
                <li>Nosotros</li>
                </Link>
                <Link to='/sign-in'>
                <li>Registrarse</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
