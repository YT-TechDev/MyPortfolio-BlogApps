import{ useState } from 'react';
import { Routes, Route, useLocation, } from 'react-router-dom';
import './App.css'
import Header from './components/header/header';
import Home from './components/Pages/Home';
import Blog from './components/Pages/Blog';
import Application from './components/Pages/Applications';
import Footer from './components/footer/footer';
import { AnimatePresence } from 'motion/react';
import BlogDetailPages from './components/Pages/PagesComponents/BlogDetailPages';
import ErrorPage from './components/Pages/PagesComponents/Errorpage';


export default function SiteApp()  {
  const [OpenMenu,DiscriminationMenu] = useState<boolean>(false);
  const location = useLocation();
    function DiscriminationOpenMenu():void{
        DiscriminationMenu(!OpenMenu);
    }

  
  return (
    <>
        <Header onClick={DiscriminationOpenMenu} isActive={OpenMenu}/>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/Blog-pages' element={ <Blog /> } />
            <Route path='/Blog-pages/:id' element={ <BlogDetailPages /> }/>
            <Route path='/Application-pages' element={ <Application /> } />
            <Route path='/ErrorPage/404/' element={<ErrorPage />} />
          </Routes>
        <Footer />
        </AnimatePresence>

        
    </>
  )
}