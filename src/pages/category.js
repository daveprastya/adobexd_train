import './category.css'
import fashion from '../media/Fashion.png'
import craft from '../media/Craft.png'
import FB from '../media/F&B.png'
import hobby from '../media/Group 1818.png'
import health from '../media/Health.png'
import tourism from '../media/Tourism.png'
import telco from '../media/Telco.png'

function category(){
  return (
    <div className="containerCategory">
      <div className="container p-4 ml-3">
        <div className="text-start textCategory">Kategori Merchant</div>
        <div className="d-flex mt-3 justify-content-between">
          <a href=""><img src={fashion}></img></a>
          <a href=""><img src={craft}></img></a>
          <a href=""><img src={FB}></img></a>
          <a href=""><img src={hobby}></img></a>
          <a href=""><img src={health}></img></a>
          <a href=""><img src={tourism}></img></a>
          <a href=""><img src={telco}></img></a>
        </div>
      </div>
    </div>
  )
}

export default category