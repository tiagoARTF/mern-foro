import {} from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Casa = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Casa
