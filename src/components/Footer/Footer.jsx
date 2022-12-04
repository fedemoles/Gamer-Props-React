import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div>
      <footer className='text-white py-4 bg-dark'>
        <div className='container'>
          <nav className='row'>
            <Link to="/" className='col-12 col-md-3 d-flex alling-items-center justify-content-center'>
              <img alt='' src='../img/logo.png' className='mx-2' height={150}></img>
            </Link>

            <ul className='col-12 col-md-3 list-unstyled'style={{ textDecorationLine: 'none', color:"white", marginRight: -344, borderRadius:"4px",padding:"4px"}}>
              <li className='font-weigh-bold mb-2'style={{ textDecorationLine: 'underline', color:"white", marginRight: -344, borderRadius:"4px",padding:"4px"}}>Enlaces</li>
              <li>
                <Link to="/category/motherboard"  className='text-reset'style={{ textDecorationLine: 'none', color:"white", marginRight: -344, borderRadius:"4px",padding:"4px"}} >Motherboard</Link>
              </li>
              <li>
                <Link to="/category/processor"  className='text-reset'style={{ textDecorationLine: 'none', color:"white", marginRight: -344, borderRadius:"4px",padding:"4px"}}> Processor</Link>
              </li>
              <li>
                <Link to="/category/memory"  className='text-reset'style={{ textDecorationLine: 'none', color:"white", marginRight: -344, borderRadius:"4px",padding:"4px"}}>Memory</Link>
              </li>
              <li>
                <Link to="/category/storage"  className='text-reset'style={{ textDecorationLine: 'none', color:"white", marginRight: -344, borderRadius:"4px",padding:"4px"}}>Storage</Link>
              </li>
              <li>
                <Link to="/category/gpu" className='text-reset'style={{ textDecorationLine: 'none', color:"white", marginRight: -344, borderRadius:"4px",padding:"4px"}}>Gpu</Link>
              </li>
            </ul>
            <ul className='col-12 col-md-3 list-unstyled'style={{ textDecorationLine: 'none', color:"white", marginLeft: 674, borderRadius:"4px",padding:"9px"}}>
              <li className='font-weigh-bold mb-2'>Síguenos en redes sociales</li>
              <li className='d-flex justify-content-between'>
                <i className="bi bi-facebook"/>
                <i className="bi bi-instagram"/>
                <i className="bi bi-twitter"/>
              </li>
            </ul>
            <div className='container'>
              <p className='text-center'>© Copyright 2022 Gamer Props React. Todos los derechos reservados - Powered by Fede Moles</p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer