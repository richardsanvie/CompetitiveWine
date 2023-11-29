import React, { useState } from 'react'
import { MenuItem } from '../MenuItem'
import * as S from './styles'
import { handleItemClick } from '../../utils/handleItemClickMenu'

export type Props = {
  ativo?: boolean
  imagem?: string
  informacaoCompartilhada: string
}

const Menu = ({ informacaoCompartilhada }: Props) => {
  const currentPath = window.location.pathname
  const menuItems = [
    {
      id: 1,
      legenda: 'ITEM 1',
      to: '/',
      complete: { informacaoCompartilhada }
    },
    {
      id: 2,
      legenda: 'ITEM 1',
      to: '/embreve2'
    },
    {
      id: 3,
      legenda: 'ITEM 1',
      to: '/embreve3'
    },
    {
      id: 4,
      legenda: 'ITEM 1',
      to: '/embreve4'
    },
    {
      id: 5,
      legenda: 'ITEM 1',
      to: '/embreve5'
    },
    {
      id: 6,
      legenda: 'ITEM 1',
      to: '/embreve6'
    },
    {
      id: 7,
      legenda: 'ITEM 1',
      to: '/embreve7'
    },
    {
      id: 8,
      legenda: 'ITEM 1',
      to: '/embreve8'
    },
    {
      id: 9,
      legenda: 'ITEM 1',
      to: '/embreve9'
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
                  ativo={currentPath === item.to}
                  to={item.to}
                  complete={item.complete}
                />
              </li>
            ))}
          </S.Ul>
        </div>
      </S.Menu>
    </>
  )
}

export default Menu
