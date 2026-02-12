import Image from "next/image";
import Link from "next/link";

export type BlogDetailCardData = {
  id: number;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  image: string;
};

type BlogDetailCardProps = {
  card: BlogDetailCardData;
};

export default function BlogDetailCard({ card }: BlogDetailCardProps) {
  return (
    <div className="w-full h-auto rounded-[15px] border border-[#DDDDDD] bg-white overflow-hidden flex flex-col">
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[354px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-6 w-full flex flex-col gap-2">
        <h3 className="w-full font-poppins font-semibold text-[18px] sm:text-[20px] leading-[42px] capitalize text-footerBg text-left">
          {card.title}
        </h3>
        <p className="w-full font-poppins font-normal text-[13px] sm:text-[14px] leading-[21px] capitalize text-[#3A3A3A] text-left">
          {card.description}
        </p>
        <Link
          href={card.href}
          className="inline-flex items-center gap-2 whitespace-nowrap font-poppins font-semibold text-[14px] leading-[24px] capitalize text-button-bg text-left mt-2"
        >
          <span className="underline">{card.linkLabel}</span>
          <Image
            src="/blog/Arrow.svg"
            alt=""
            aria-hidden="true"
            width={18}
            height={8}
            className="shrink-0"
          />
        </Link>
      </div>
    </div>
  );
}
