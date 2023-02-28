import '@/styles/globals.css'
import { CookiesProvider } from "react-cookie"
import axios from 'axios'
import {useEffect} from 'react'
import { Provider } from 'react-redux'
import reduxStore from "../redux/store"
import Layout from '@/components/General/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={reduxStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    
  )  
}
