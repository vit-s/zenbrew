import Image from "next/image.js"

const Badge = ({ containerStyles }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src={"/assets/badge.svg"}
        fill
        alt={''}
        className={'object-contain'}
      />
    </div>
  )
}
export default Badge
