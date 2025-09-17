'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import HeaderCart from "./HeaderCart"
import Sidebar from "./Sidebar"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Header5 from "./header/Header5"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
  const [scroll, setScroll] = useState(false)
  const [isMobileMenu, setMobileMenu] = useState(false)
  const [isCartSidebar, setCartSidebar] = useState(false)

  const handleMobileMenu = () => setMobileMenu(prev => !prev)
  const handleCartSidebar = () => setCartSidebar(prev => !prev)

  useEffect(() => {
    AOS.init({ once: true }) // initialize animations

    const onScroll = () => setScroll(window.scrollY > 100)
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <DataBg />

      {/* Headers */}
      {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />}
      {headerStyle === 1 && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />}
      {headerStyle === 2 && <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />}
      {headerStyle === 3 && <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />}
      {headerStyle === 4 && <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />}
      {headerStyle === 5 && <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />}

      {/* Sidebars */}
      <Sidebar isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
      <HeaderCart isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />

      {/* Main Content */}
      <main>
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
      </main>

      {/* Footers */}
      {!footerStyle && <Footer1 />}
      {footerStyle === 1 && <Footer1 />}
      {footerStyle === 2 && <Footer2 />}

      <BackToTop />
    </>
  )
}
