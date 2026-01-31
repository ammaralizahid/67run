'use client'

interface Brand {
  id: number
  name: string
  logo: string
}

interface BrandProps {
  brands: Brand[]
}

export default function Brand({ brands }: BrandProps) {
  return (
    <section className="w-full py-16">
      <div className="max-w-[1366px] mx-auto px-4">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-6
            gap-10
            items-center
            justify-items-center
          "
        >
          {brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.logo}
              alt={brand.name}
              className="
                max-w-[115px]
                max-h-[123px]
                w-full
                h-auto
                object-contain
              "
            />
          ))}
        </div>
      </div>
    </section>
  )
}
