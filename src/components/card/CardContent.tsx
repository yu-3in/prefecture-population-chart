import { css } from '@emotion/react'

export type CardContentProps = { children: React.ReactNode }

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div css={content}>{children}</div>
}

const content = css`
  padding: 10px;
`
