import '@/styles/globals.css'
import { CookiesProvider } from "react-cookie"
import axios from 'axios'
import {useEffect} from 'react'

import Layout from '@/components/General/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )  
}
