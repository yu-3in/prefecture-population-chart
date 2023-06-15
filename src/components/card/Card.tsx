import { theme } from '@/theme'
import { css } from '@emotion/react'
import React from 'react'

export type CardProps = { children: React.ReactNode }

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div css={card}>{children}</div>
}

const card = css`
  padding: 2rem 1rem;
  border-radius: 1rem;
  background-color: ${theme.colors.white};
  box-shadow: rgba(67, 133, 187, 0.07) 0px 8px 12px 0px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 2rem 3rem;
  }
`
