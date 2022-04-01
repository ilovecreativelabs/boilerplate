import Image from 'next/image'

export type ImageProps = {
  image: string
  alt: string
  widthSize: string
  heightSize: string
}

const IImage = ({ image, alt, widthSize, heightSize }: ImageProps) => (
  <>
    <Image
      src={image}
      alt={alt}
      role="image"
      aria-label={alt}
      width={widthSize}
      height={heightSize}
    />
  </>
)

export default IImage
