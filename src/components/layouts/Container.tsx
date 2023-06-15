import { css } from '@emotion/react'

export type ContainerProps = {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div css={container}>{children}</div>
}

const container = css`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
`
