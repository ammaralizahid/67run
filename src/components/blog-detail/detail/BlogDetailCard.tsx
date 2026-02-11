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
    <div className="w-full max-w-[280px] h-auto md:w-[280px] md:h-[499px] rounded-[15px] border border-[#DDDDDD] bg-white overflow-hidden flex flex-col opacity-100">
      <div className="relative w-full aspect-[279/354] md:w-[279px] md:h-[354px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover rounded-t-[15px] opacity-100"
        />
      </div>
      <div className="p-4 w-full flex flex-col gap-2">
        <h3 className="w-full font-poppins font-semibold text-[18px] leading-[24px] capitalize text-footerBg text-left">
          {card.title}
        </h3>
        <p className="w-full font-poppins font-normal text-[13px] leading-[21px] capitalize text-[#3A3A3A] text-left">
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
