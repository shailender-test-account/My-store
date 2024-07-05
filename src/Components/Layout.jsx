import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
    <Headers/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout;