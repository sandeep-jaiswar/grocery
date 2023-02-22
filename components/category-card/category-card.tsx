import { Card, Text, Grid } from "@nextui-org/react"
import Icon from "../icon/icon"
import ProductCard from "../product-card/productCard"

type CategoryCardProps = {
  title: string
}

export default function CategoryCard(props: CategoryCardProps) {
  const { title } = props
  return (
    <Card
      isPressable
      isHoverable
      css={{ mw: "1400px", borderRadius: "unset", margin: "auto" }}
    >
      <Card.Header css={{ paddingBottom: "unset" }}>
        <Grid.Container>
          <Grid xs={11}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {title}
            </Text>
          </Grid>
          <Grid xs={1}>
            <Icon src="/svg/arrow-right.svg" />
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "nowrap",
            width: "max-content",
          }}
        >
          <ProductCard height={"100px"} width={"100px"} />
          <ProductCard height={"100px"} width={"100px"} />
          <ProductCard height={"100px"} width={"100px"} />
          <ProductCard height={"100px"} width={"100px"} />
          <ProductCard height={"100px"} width={"100px"} />
          <ProductCard height={"100px"} width={"100px"} />
          <ProductCard height={"100px"} width={"100px"} />
          <ProductCard height={"100px"} width={"100px"} />
        </div>
      </Card.Body>
    </Card>
  )
}
