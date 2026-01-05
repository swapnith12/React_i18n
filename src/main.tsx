import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './lib/i18n.ts'
import { worker } from './msw/worker'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

async function enableMocking() {
  //@ts-ignore
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  return worker.start()
}
 
enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    
  </StrictMode>,
)
})

