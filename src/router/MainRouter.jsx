import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '../pages/Home'
import { ItemDetailContainer } from "../pages/ItemDetailContainer"
import NavBar from "../components/NavBar"
import { Category } from "../pages/Category"



export const MainRouter = () => {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/item/:productId' element={<ItemDetailContainer />}/>
                <Route path='/category/:id' element={<Category />}/>

            </Routes>
        </BrowserRouter>
    )
}
