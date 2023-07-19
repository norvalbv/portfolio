import React, { ReactElement } from 'react'
import NavBar from 'components/navbar/navbar'
import Footer from 'components/footer/footer'

type MainLayout = {
    children: JSX.Element | JSX.Element[]
}

const MainLayout = ({children}: MainLayout) : ReactElement=> {
  return (
    <div className='min-h-screen'><NavBar />{children}<Footer /></div>
  )
}

export default MainLayout