import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../Usuarios/Login'
import Home from './Home'
import Historias from '../historias/Historias'
import Template from './EjemploTemplate/Template'
import Registro from '../Usuarios/Registro'
import Footer from './Footer'
import Navegador from './Navegador'


function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/Home' element={<Home/>}></Route>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/Historias' element={<Historias/>}></Route>
                <Route path='/Template' element={<Template/>}></Route>
                <Route path='/Table' element={<Template/>}></Route>
                <Route path='/Form' element={<Template/>}></Route>
                <Route path='/Registro' element={<Registro/>}></Route>
                <Route path='/Footer' element={<Footer/>}></Route>
                <Route path='/Navegador' element={<Navegador/>}></Route>

                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router