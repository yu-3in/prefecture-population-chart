import { SerializedStyles, css } from '@emotion/react'

type Variant = 'standard' | 'rounded' | 'circle'

export type SkeltonProps = {
  width: string
  height: string
  variant?: Variant
}

export const Skelton: React.FC<SkeltonProps> = ({ width, height, variant = 'standard' }) => {
  return <div css={[skelton(width, height), variantStyles[variant]]} />
}

const skelton = (width: string, height: string) => css`
  width: ${width};
  height: ${height};
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: wave-squares 2s infinite ease-out;
  @keyframes wave-squares {
    0% {
      background-position: 0px 0;
    }
    100% {
      background-position: 800px 0;
    }
  }
`

const variantStyles: Record<Variant, SerializedStyles> = {
  standard: css``,
  rounded: css`
    border-radius: 1rem;
  `,
  circle: css`
    border-radius: 9999px;
  `,
}
