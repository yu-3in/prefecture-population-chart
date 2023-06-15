import { theme } from '@/theme'
import { css } from '@emotion/react'
import React from 'react'
import { CardTabProps } from './CardTab'

export type CardTabsProps = {
  children: React.ReactNode
  value?: string
  onChange: (value: string) => void
}

export const CardTabs: React.FC<CardTabsProps> = ({ children, value, onChange }) => {
  return (
    <div css={tablist} role="tablist">
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<CardTabProps>, {
          selected: value === (child as React.ReactElement<CardTabProps>).props.value,
          onClick: () => value && onChange((child as React.ReactElement<CardTabProps>).props.value),
        })
      )}
    </div>
  )
}

const tablist = css`
  margin: -1rem -3rem 1rem;
  padding: 0 1rem;
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid ${theme.colors.border};
`
