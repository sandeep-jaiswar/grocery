import Image from "next/image"

type IconProps = {
  src: string
}

export default function Icon(props: IconProps) {
  const { src } = props
  return <Image width={24} height={24} src={src} alt={""} />
}
