import {z} from "zod"
import {hashSchema} from "@/lib/validation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {formatCents} from "@/lib/formatCents"
import Link from "next/link"
import {proseClassName} from "../Editor/constants"
import {renderToHTML} from "../Editor/editor/renderToHTML"

interface Props {
  product: z.infer<typeof hashSchema>
  productId: string
}

export function Product({product, productId}: Props) {
  return (
    <Card>
      <CardHeader className="items-start">
        {product.imageSrc && (
          <div className="relative w-full aspect-square overflow-hidden mb-6 rounded-lg">
            <Image
              src={product.imageSrc}
              alt={`Picture of ${product.title}`}
              fill
              style={{
                objectFit: "contain",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardTitle className="leading-tight">{product.title}</CardTitle>
        {product.description && (
          <CardDescription>
            <div
              className={proseClassName}
              dangerouslySetInnerHTML={{
                __html: renderToHTML(JSON.parse(product.description)),
              }}
            />
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <Button className="w-full" asChild>
          <Link href={`/checkout/${productId}`}>{`Buy for ${formatCents(
            Number(product.amount) * 100,
            product.currency
          )}`}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
