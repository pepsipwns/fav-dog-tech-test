import DogProvider from '@/context/DogProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DogProvider>
      <Component {...pageProps} />
    </DogProvider>
  )
}
