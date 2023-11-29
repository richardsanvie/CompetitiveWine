import NavBar from '../../components/NavBar'
import * as S from './styles'
import { useState } from 'react'
import image1 from '../../image/nav1.png'
import image2 from '../../image/nav2.png'
import image3 from '../../image/nav3.svg'
import image4 from '../../image/nav4.svg'
import image5 from '../../image/nav5.svg'
import image6 from '../../image/nav6.svg'

export const BarraLateral = () => {
  const itemSideNav = localStorage.getItem('selectedItemSideNav')
  const [selectedItemSideNav, setSelectedItemSideNav] = useState(
    itemSideNav ? parseInt(itemSideNav, 10) : 1
  )
  const handleItemClick = (itemId: number) => {
    setSelectedItemSideNav(itemId)
    localStorage.setItem('selectedItemSideNav', itemId.toString())
  }
  const [item, setItem] = useState(true)

  const images = {
    nav1: image1,
    nav2: image2,
    nav3: image3,
    nav4: image4,
    nav5: image5,
    nav6: image6
  }

  const navItems = [
    {
      id: 1,
      ativo: item,
      onClick: () => handleItemClick(1),
      imagem: images.nav1,
      to: '/EmBreveSideBox'
    },
    {
      id: 2,
      ativo: item,
      onClick: () => handleItemClick(2),
      imagem: images.nav2,
      to: '/'
    },
    {
      id: 3,
      ativo: item,
      onClick: () => handleItemClick(3),
      imagem: images.nav3,
      to: '/EmBreveSideBox'
    },
    {
      id: 4,
      ativo: item,
      onClick: () => handleItemClick(4),
      imagem: images.nav4,
      to: '/EmBreveSideBox',
      notf: true
    },
    {
      id: 5,
      ativo: item,
      onClick: () => handleItemClick(5),
      imagem: images.nav5,
      to: '/EmBreveSideBox'
    },
    {
      id: 6,
      ativo: item,
      onClick: () => handleItemClick(6),
      imagem: images.nav6,
      to: '/EmBreveSideBox'
    }
  ]

  return (
    <S.Aside>
      <svg
        className="floatingImageWhite"
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="41"
        viewBox="0 0 57 41"
        fill="none"
      >
        <rect width="57" height="41" fill="white" />
      </svg>
      <S.Container>
        {navItems.map((n) => (
          <NavBar
            key={n.id}
            ativo={selectedItemSideNav === n.id}
            onClick={n.onClick}
            imagem={n.imagem}
            to={n.to}
            notf={n.notf}
          />
        ))}
      </S.Container>
    </S.Aside>
  )
}
