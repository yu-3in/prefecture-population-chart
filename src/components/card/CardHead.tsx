import { theme } from '@/theme'
import { css } from '@emotion/react'

export type CardHeadProps = { children: React.ReactNode }

export const CardHead: React.FC<CardHeadProps> = ({ children }) => {
  return <div css={head}>{children}</div>
}

const head = css`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid ${theme.colors.border};
`
