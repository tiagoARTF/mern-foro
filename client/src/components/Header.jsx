import {} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='bg-slate-400'>
        <div className='flex justify-between items-center max-w-screen-2xl mx-auto p-4'>
            <Link to='/'>
            <h1 className='font-bold'>LitSphere</h1>
            </Link>
            <ul className='flex gap-4 items-center'>
                <Link to='/'>
                <li>Inicio</li>
                </Link>
                <Link to='/about'>
                <li>Nosotros</li>
                </Link>
                <Link to='/profile'>
                {currentUser ? (
                  <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
                ):(
                
                <li className='lis'>Iniciar Sesión</li>
                )}
                </Link>
            </ul>
        </div>
    </div>
  )
}
