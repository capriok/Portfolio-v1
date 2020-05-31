import React, { useState, useLayoutEffect } from 'react'
import Axios from 'axios'
import close from '../../gallery/close.png'
import './inquiry.scss'

function useLockBodyScroll() {
  const isMobile = window.innerWidth < 500
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    if (!isMobile) document.body.style.marginRight = '8px';
    return () => {
      document.body.style.overflow = 'initial';
      document.body.style.marginRight = '0px';
    }
  }, []);
}

const Inquiry = ({
  inquiryState,
  setInquiryState,
  inquiryForm,
  setInquiryForm,
  handleInquiryClose
}) => {

  useLockBodyScroll();

  const emailTest = () => {
    const emailRegex = new RegExp(/\S+@\S+\.\S+/)
    let test = emailRegex.test(inquiryForm.email)
    return test
  }

  const submitEmail = async (e) => {
    e.preventDefault()
    let isValid = emailTest()
    if (!inquiryForm.name || !inquiryForm.email || !inquiryForm.body) return
    if (!isValid) return
    setInquiryState({ ...inquiryState, submitLoading: true })
    Axios.post(process.env.REACT_APP_POST + '/send', inquiryForm)
      .then(res => {
        console.log(res)
        setInquiryState({
          ...inquiryState,
          submitSent: true,
          statusTitleMessage: 'Successfully Sent',
          statusSubMessage: 'Thank you'
        })
      })
      .catch(err => {
        console.log(err)
        setInquiryState({
          ...inquiryState,
          submitSent: true,
          statusTitleMessage: 'Something went wrong',
          statusSubMessage: 'Email me directly at capriodev@gmail.com'
        })
      })
  }

  return (
    <>
      <div className="inquiry bg">
        <div className="close"><img src={close} alt="" onClick={() => { handleInquiryClose() }} /></div>
        <h1>Inquire</h1>
        {inquiryState.submitSent
          ? <div className="post-submit">
            <h1>{inquiryState.statusTitleMessage}</h1>
            <h1 className="sub">{inquiryState.statusSubMessage}</h1>
          </div>
          : <form onSubmit={(e) => { submitEmail(e) }}>
            <p className="req">All Fields Required</p>
            <input type="text"
              placeholder="Name"
              value={inquiryForm.name}
              onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
            />
            <input type="email"
              placeholder="Email"
              value={inquiryForm.email}
              onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
            />
            <textarea type="text" rows="7"
              placeholder="Message Body"
              value={inquiryForm.body}
              onChange={(e) => setInquiryForm({ ...inquiryForm, body: e.target.value })}
            />
            <button type="submit"
              disabled={
                (inquiryState.submitLoading || !inquiryForm.name || !inquiryForm.body)
                  ? true : false
              }>Submit</button>
          </form>
        }
      </div>
    </>
  )
}

export default Inquiry

