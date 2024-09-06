import React from 'react'

const Footer = () => {
    const today= new Date();
  return (
    <div>
      <footer >
        <p class="bottom-para"> Copyright &copy; {today.getFullYear()}  Gautam</p>
      </footer>
    </div>
  )
}

export default Footer
