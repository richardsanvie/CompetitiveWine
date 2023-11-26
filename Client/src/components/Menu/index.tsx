import React, { useState } from 'react'
import { MenuItem } from '../MenuItem'
import * as S from './styles'
import { handleItemClick } from '../../utils/handleItemClickMenu'

export type Props = {
  ativo?: boolean
  onClick?: () => void
  imagem?: string
  informacaoCompartilhada: string
}

const Menu = ({ informacaoCompartilhada }: Props) => {
  const itemNav = localStorage.getItem('selectedItem')
  const [selectedItem, setSelectedItem] = useState(
    itemNav ? parseInt(itemNav, 10) : 1
  )
  const onItemClick = (itemId: number) =>
    handleItemClick(itemId, setSelectedItem)

  const menuItems = [
    {
      id: 1,
      legenda: 'ITEM 1',
      to: '/',
      onClick: () => onItemClick(1),
      complete: { informacaoCompartilhada }
    },
    {
      id: 2,
      legenda: 'ITEM 1',
      to: '/embreve',
      onClick: () => onItemClick(2)
    },
    {
      id: 3,
      legenda: 'ITEM 1',
      to: '/embreve',
      onClick: () => onItemClick(3)
    },
    {
      id: 4,
      legenda: 'ITEM 1',
      to: '/embreve',
      onClick: () => onItemClick(4)
    },
    {
      id: 5,
      legenda: 'ITEM 1',
      to: '/embreve',
      onClick: () => onItemClick(5)
    },
    {
      id: 6,
      legenda: 'ITEM 1',
      to: '/embreve',
      onClick: () => onItemClick(6)
    },
    {
      id: 7,
      legenda: 'ITEM 1',
      to: '/embreve',
      onClick: () => onItemClick(7)
    },
    {
      id: 8,
      legenda: 'ITEM 1',
      to: '/embreve',
      onClick: () => onItemClick(8)
    },
    {
      id: 9,
      legenda: 'ITEM 1',
      to: '/embreve',
      onClick: () => onItemClick(9)
    }
  ]

  return (
    <>
      <S.Menu>
        <svg
          className="Line"
          width="1117"
          height="5"
          viewBox="0 0 1117 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="-2.18557e-07"
            y1="2.50012"
            x2="1117"
            y2="2.50002"
            stroke="#4FA1C1"
            strokeWidth="5"
            strokeDasharray="10 10"
          />
        </svg>
        <div className="Container">
          <S.Ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <MenuItem
                  legenda={item.legenda}
                  ativo={selectedItem === item.id}
                  to={item.to}
                  complete={item.complete}
                  onClick={item.onClick}
                ></MenuItem>
              </li>
            ))}
          </S.Ul>
        </div>
      </S.Menu>
    </>
  )
}

export default Menu
