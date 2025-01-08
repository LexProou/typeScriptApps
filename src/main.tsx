import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './output.css'


import Todo from './pages/Todo.tsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { store } from './redux/store.tsx'
import { Provider } from 'react-redux'
import Counter from './pages/Counter.tsx'
import Navbar from './components/NavBar.tsx'


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
    <StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </StrictMode>
    </BrowserRouter>
  </Provider>,
    
    
)
