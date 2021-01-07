import './footer.css'
import twitter from '../media/twitter.png'
import instagram from '../media/instagram.png'
import fb from '../media/fb.png'

function footer() {
  return (
    <div className="containerFooter">
      <div className="container d-flex justify-content-between">
        <div className="divFooter1 mt-2 d-flex">
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
        <div className="sosmed">
          <a href=""><img src={twitter}/></a>
          <a href=""><img src={instagram}/></a>
          <a href=""><img src={fb}/></a>
        </div>
      </div>
    </div>
  )
}

export default footer