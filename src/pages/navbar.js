import char from '../media/Char.png'
import './navbar.css'

function navbar(){
  return (
    <div className='container daveNav fw-bold'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Merchant</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Promo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Kegiatan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Kontak Kami</a>
              </li>
            </ul>
            <form className="d-flex">
              <div className="input-group searchInput">
                <input className="form-control me-2 mt-1 rounded" type="text" placeholder="Cari Jam Tangan Kayu.." aria-label="Search" style={{height: '40px', width: '368px', fontSize:'10pt', paddingRight: '40px'}}/>
                <i className="fas fa-search" aria-hidden="true"></i>
              </div>
              <img src={char} style={{height: '50px'}} alt=""></img>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar