import React from 'react'
import useLockBodyScroll from '../hooks/uselockbodyscroll'

const Clickout = ({ state, close }) => {
  return (
    <>
      {state.open && <div className="view-clickout" onClick={() => close()}></div>}
    </>
  )
}

const FullView = ({ state, close }) => {
  useLockBodyScroll()
  return (
    <>
      <div className="full-view">
        <img src={state.img} alt="" />
        <Clickout state={state} close={close} />
      </div>
    </>
  )
}

export default FullView
