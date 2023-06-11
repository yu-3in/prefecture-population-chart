import { css } from '@emotion/react'

export type CardProps = { children: React.ReactNode }

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div css={card}>{children}</div>
}

const card = css`
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: rgba(67, 133, 187, 0.07) 0px 8px 12px 0px;
`
