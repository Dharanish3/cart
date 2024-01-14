import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to='/'>CART</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to ='/'>Home</Link></li>
                        <Link className="nav-item"><a className="nav-link" to ='/cart'>Cart</a></Link>
                       
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit" onClick={() => navigate('/cart')}>
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">5</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
       
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

        <br />
    

        <button type="button" class="btn btn-info" onClick={()=> navigate('/cart')}>View Cart</button>
    </>
  )
}   

export default Home
