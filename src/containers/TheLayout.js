import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import './TheLayout.css'
const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <div className=" layout">
          <TheContent/>
        </div>
      </div>
    </div>
  )
}

export default TheLayout
