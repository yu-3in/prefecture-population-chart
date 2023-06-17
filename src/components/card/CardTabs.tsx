import { theme } from '@/theme'
import { css } from '@emotion/react'
import React, { useCallback, useState } from 'react'
import { CardTabProps } from './CardTab'

export type CardTabsProps = {
  children: React.ReactNode
  value?: string
  onChange?: (value: string) => void
}

export const CardTabs: React.FC<CardTabsProps> = ({ children, value, onChange }) => {
  const [selected, setSelected] = useState(value)
  const handleChange = useCallback(
    (value: string) => {
      setSelected(value)
      onChange && onChange(value)
    },
    [onChange]
  )

  return (
    <div>
      <div css={tablist} role="tablist">
        {React.Children.map(
          children,
          (child) =>
            React.isValidElement<CardTabProps>(child) &&
            React.cloneElement(child, {
              selected: selected === child.props.value,
              onClick: () => handleChange(child.props.value),
            })
        )}
      </div>
    </div>
  )
}

const tablist = css`
  margin: -1rem -1rem 1rem;
  padding: 0 1rem;
  display: flex;

  border-bottom: 1px solid ${theme.colors.border};
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    background-color: transparent;
    height: 0;
  }

  @media screen and (min-width: 768px) {
    margin: -1rem -3rem 1rem;
    gap: 0.5rem;
  }
`
