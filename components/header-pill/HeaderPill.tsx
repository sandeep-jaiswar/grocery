import { Button, Grid, Input } from "@nextui-org/react"
import Icon from "../icon/icon"

export default function HeaderPill() {
  const getSearchIcon = () => <Icon src="/svg/search.svg" />
  return (
    <Grid>
      <Button.Group auto>
        <Button auto ghost>
          store department
        </Button>
      </Button.Group>
    </Grid>
  )
}
