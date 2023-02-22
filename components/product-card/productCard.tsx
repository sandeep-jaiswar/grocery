import { Card, Col, Row, Button, Text } from "@nextui-org/react"

type ProductCardProps = {
  height: string
  width: string
}

const ProductCard = (props: ProductCardProps) => {
  const { height, width } = props
  return (
    <Card css={{ height, width }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
    </Card>
  )
}

export default ProductCard
