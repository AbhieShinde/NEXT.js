import Navbar from "./Navbar"
// Kind of a wrapper, here we're adding a navbar to the any component within this Layout
function Layout({children}) {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}

export default Layout