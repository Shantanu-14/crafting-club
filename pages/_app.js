import '../styles/globals.css'
import Navbar from "../components/header/Navbar"
import Footer from "../components/footer/Footer"

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
