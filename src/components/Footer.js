import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    bottom: 0,
    // top: "100vh",
    width: "100%",
    padding:"10px 0"}
  return (
    <footer className='bg-dark text-light py-3'style={footerStyle}
    >
      <p className='text-center'>
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer
