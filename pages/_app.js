import '../styles/globals.css'
import Navbar from "../components/header/Navbar"
import Footer from "../components/footer/Footer"

function MyApp({ Component, pageProps }) {
  return <div>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}

export default MyApp
