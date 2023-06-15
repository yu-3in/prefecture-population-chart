import { theme } from '@/theme'
import { css } from '@emotion/react'

export type CardTabProps = {
  children: React.ReactNode
  value: string
  selected?: boolean
  onClick?: () => void
}

export const CardTab: React.FC<CardTabProps> = ({ children, selected = false, onClick }) => {
  return (
    <button
      css={[tab, selected && tabSelected]}
      onClick={onClick}
      role="tab"
      aria-selected={selected}>
      {children}
    </button>
  )
}

const tab = css`
  background-color: ${theme.colors.white};
  border: none;
  border-radius: 0.5rem 0.5rem 0 0;
  height: 44px;
  padding: 0 1rem;
  cursor: pointer;
`

const tabSelected = css`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
  position: relative;
  font-weight: bold;
  color: ${theme.colors.green};

  &:before {
    content: '';
    display: block;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    box-shadow: ${theme.colors.white} 0px 10px 0px 1px;
  }
`
