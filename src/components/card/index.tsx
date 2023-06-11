import { Card as CardComponent, CardProps } from './Card'
import { CardContent, CardContentProps } from './CardContent'
import { CardHead, CardHeadProps } from './CardHead'

type CardComposition = {
  Head: React.FC<CardHeadProps>
  Content: React.FC<CardContentProps>
}

export const Card = Object.assign<React.FC<CardProps>, CardComposition>(CardComponent, {
  Head: CardHead,
  Content: CardContent,
})
