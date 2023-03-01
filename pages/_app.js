import '../styles/globals.css'
import '../Components/Navbar/Navbar.css'
import Navbar from '../Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Navbar/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
