"use client";

import Image from "next/image";

interface Brand {
  id: number;
  name: string;
  logo: string;
}

interface BrandProps {
  brands: Brand[];
}

export default function Brand({ brands }: BrandProps) {
  return (
    <section className="w-full py-10">
      <h2 className="font-semibold text-[24px] lg:text-[43px] leading-[42px] font-poppins text-center mb-6">
        Veranstaltungspartner
      </h2>
      <div className="max-w-[1366px] mx-auto px-4 mt-4">
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
            <div key={brand.id} className="relative w-auto h-auto">
              <Image
                src={brand.logo}
                alt={brand.name}
                height={124}
                width={124}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
