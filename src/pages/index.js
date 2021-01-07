import Navbar from './navbar'
import Category from './category'
import Footer from './footer'

function indexPage(){
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column overflow-auto">
        <Category />
        <div className='bg-warning'>Main</div>
        <div style={{height: '10px', backgroundColor: '#F7F7F7'}}></div>
        <Footer />
      </div>
    </div>
  )
}

export default indexPage;