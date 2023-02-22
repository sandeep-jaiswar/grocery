import Head from "next/head"
import Icon from "../components/icon/icon"
import { Button, Grid, Input } from "@nextui-org/react"
import HeaderPill from "../components/header-pill/HeaderPill"
import ShoppingList from "../components/category-card/category-card"
import Link from "next/link"
import { useRouter } from "next/router"

export default function IndexPage() {
  const router = useRouter()
  const handleClick = (e, url) => {
    e.preventDefault()
    router.push(url)
  }
  return (
    <>
      <Head>
        <title>Grocery</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Grid.Container gap={0.5}>
        <Grid xs={12} sm={12} md={12}>
          <ShoppingList title="Shopping List" />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={12}
          onClick={(e) => handleClick(e, "/popular")}
        >
          <ShoppingList title="Popular" />
        </Grid>
        <Grid xs={12} sm={12} md={12}>
          <ShoppingList title="On Discount" />
        </Grid>
        <Grid xs={12} sm={12} md={12}>
          <ShoppingList title="Recently Viewed" />
        </Grid>
      </Grid.Container>
    </>
  )
}
