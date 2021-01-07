import filter from '../media/Filter.png'

function body(){
  return(
    <div className='containerBody'>
      <div className="container">
        <div className="d-flex">
          <div className="Rounded bg-danger text-light">
            <a href="">A</a>
            <a href="">B</a>
          </div>
          <div>
            <a href=""><img src={filter}></img></a>
          </div>
        </div>
        <div>Isi content</div>
        <div>Pagination</div>
      </div>
    </div>
  ) 
}

export default body