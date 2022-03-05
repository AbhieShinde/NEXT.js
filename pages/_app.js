import '../styles/globals.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Layout from '../components/Layout'
import Axios from "axios";

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
