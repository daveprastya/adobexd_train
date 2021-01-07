import Navbar from './navbar'

function indexPage(){
  return (
    <div>
      <Navbar />
      <div className='bg-danger'>kategori</div>
      <div className='bg-warning'>Main</div>
      <div className='bg-success'>Footer</div>
    </div>
  )
}

export default indexPage;