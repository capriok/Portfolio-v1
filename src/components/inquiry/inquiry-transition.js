import React from 'react'
import { Transition } from 'react-spring/renderprops'

const InquiryTransition = ({ inquiryState, children }) => {
  return (
    <Transition
      items={inquiryState.open}
      from={{ zIndex: 500, position: 'fixed', top: -300 }}
      enter={{ zIndex: 500, position: 'fixed', top: 0 }}
      leave={{ zIndex: 500, position: 'fixed', top: -300 }}
      config={{ duration: 100 }}>
      {open => open && (props => <div style={props}>
        {children}
      </div>)}
    </Transition>
  )
}

export default InquiryTransition
