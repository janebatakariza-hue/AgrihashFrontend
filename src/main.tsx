import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Agri from './agri.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Agri />
  </StrictMode>,
)
