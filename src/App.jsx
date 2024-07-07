import { Banner } from './components/Banner'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Shelves } from './components/Shelves'
import {Footer} from './components/Footer'


import './global.css'


export function App(){
    return(
        <>
            <Header/>
            <Banner/>
            <Shelves/>
            <Form/>
            <Footer/>
        </>
    )
}