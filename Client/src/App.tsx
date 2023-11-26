import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import { Home } from './pages/Home'
import { EmBreveSideBox } from './pages/EmBreveSideBox'

import store from './store'
import { Cadastro } from './pages/Cadastro'
import { PageEmBreve } from './pages/EmBreve'
import { Testes } from './pages/Testes'
import { Teste } from './pages/Teste'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    )
  },
  {
    path: '/EmBreveSideBox',
    element: (
      <>
        <EmBreveSideBox />
      </>
    )
  },
  {
    path: '/novo',
    element: <Cadastro />
  },
  {
    path: '/embreve',
    element: <PageEmBreve />
  },
  {
    path: '/testes',
    element: <Testes />
  },
  {
    path: '/teste',
    element: <Teste />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
