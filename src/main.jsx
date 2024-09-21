import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Main from './router/main.jsx'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Main />
    </BrowserRouter>
)
