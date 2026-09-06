import '@/styles/globals.css'
import DesktopProvider from '../components/DesktopContext'

export default function App({ Component, pageProps }) {
  return (
    <DesktopProvider>
      <Component {...pageProps} />
    </DesktopProvider>
  )
}
