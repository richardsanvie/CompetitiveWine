import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import { Home } from './pages/Home'
import { EmBreveSideBox } from './pages/EmBreveSideBox'

import store from './store'
import { Cadastro } from './pages/Cadastro'
import { EmBreve2 } from './pages/Page2EmBreve'
import { EmBreve3 } from './pages/Page3EmBreve'
import { EmBreve4 } from './pages/Page4EmBreve'
import { EmBreve5 } from './pages/Page5EmBreve'
import { EmBreve6 } from './pages/Page6EmBreve'
import { EmBreve7 } from './pages/Page7EmBreve'
import { EmBreve8 } from './pages/Page8EmBreve'
import { EmBreve9 } from './pages/Page9EmBreve'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/EmBreveSideBox',
    element: <EmBreveSideBox />
  },
  {
    path: '/novo',
    element: <Cadastro />
  },
  {
    path: '/embreve2',
    element: <EmBreve2 />
  },
  {
    path: '/embreve3',
    element: <EmBreve3 />
  },
  {
    path: '/embreve4',
    element: <EmBreve4 />
  },
  {
    path: '/embreve5',
    element: <EmBreve5 />
  },
  {
    path: '/embreve6',
    element: <EmBreve6 />
  },
  {
    path: '/embreve7',
    element: <EmBreve7 />
  },
  {
    path: '/embreve8',
    element: <EmBreve8 />
  },
  {
    path: '/embreve9',
    element: <EmBreve9 />
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
