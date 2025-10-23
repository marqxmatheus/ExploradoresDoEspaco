import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  // defer,
} from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))

// Exemplo de loader (busca de dados antes de renderizar)
// async function dashboardLoader() {
//   // você pode checar auth aqui e redirecionar
//   const user = JSON.parse(localStorage.getItem('user') || 'null')
//   if (!user) throw new Response('Unauthorized', { status: 401 })
//   const stats = await fetch('/api/stats').then(r => r.json())
//   return defer({ user, stats })
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <React.Suspense fallback={<div>Carregando…</div>}><Home /></React.Suspense>,
    errorElement: <div>Algo deu errado</div>,
  },
  { path: '*', element: <div>404 — Página não encontrada</div> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)