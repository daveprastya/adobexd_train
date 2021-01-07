import Navbar from './navbar'
import Category from './category'

function indexPage(){
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column overflow-auto">
        <Category />
        <div className='bg-warning'>Main</div>
        <div className='bg-success'>Footer</div>
      </div>
    </div>
  )
}

export default indexPage;