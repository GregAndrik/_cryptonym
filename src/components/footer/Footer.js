import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-copyright'>
        <p>&copy; {new Date().getFullYear()} _cryptonym. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer