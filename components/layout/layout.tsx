import { ReactNode } from "react"
import Header from "../header/header"

type LayoutProps = {
  children: ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}
