"use client";

import Image from "next/image";
import BlogDetailCard, {
  BlogDetailCardData,
} from "@/components/blog-detail/detail/BlogDetailCard";

export default function Detail() {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  const cards: BlogDetailCardData[] = [
    { id: 1, title: "Jakarta 5K Marathon", description, linkLabel: "Mehr erfahren", href: "#", image: "/blog/1.svg" },
    { id: 2, title: "Fun Run Festival", description, linkLabel: "Mehr erfahren", href: "#", image: "/blog/2.svg" },
    { id: 3, title: "Outrun City Marathon", description, linkLabel: "Mehr erfahren", href: "#", image: "/blog/3.svg" },
    { id: 4, title: "S3K Runnin Marathon", description, linkLabel: "Mehr erfahren", href: "#", image: "/blog/4.svg" },
  ];

  return (
    <>
      <section className="w-full bg-white mt-[45px] overflow-x-hidden">
        <div className="mx-auto w-full max-w-[1366px] px-6 sm:px-6 lg:pl-[195px] lg:pr-6">
          <div className="flex flex-wrap items-center gap-4 max-w-full md:flex-nowrap md:w-max">
            <p className="w-[110px] h-[30px] shrink-0 whitespace-nowrap font-poppins font-medium text-[18px] leading-[100%] text-[#435CBC]">
              Sep 4, 2023 |
            </p>
            <div className="flex items-center gap-2 w-[146px] h-[23px] shrink-0 whitespace-nowrap rounded-[50px] opacity-100">
              <Image
                src="/blog-detail/Profile.svg"
                alt=""
                aria-hidden="true"
                width={22}
                height={22}
                className="w-[22px] h-[22px] rounded-[50px] border-[1px] border-black opacity-100"
              />
              <span className="w-[113px] h-[23px] font-['DM_Sans'] font-medium text-[18px] leading-[100%] text-[#435CBC]">
                By Admin
              </span>
            </div>
          </div>
          <h2 className="mt-4 w-full max-w-[702px] font-poppins font-bold text-[38px] leading-[48px] text-black">
            Wie unser Laufclub Sie vorbereitet.
          </h2>
          <div className="mt-3 flex items-center gap-3 flex-nowrap whitespace-nowrap">
            <p className="font-['DM_Sans'] font-medium text-[16px] leading-[100%] text-black whitespace-nowrap">
              Teilen Sie diese Neuigkeiten :
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/blog-detail/Facebook.svg"
                alt="Facebook"
                width={7}
                height={14}
                className="w-[7px] h-[14px]"
              />
              <Image
                src="/blog-detail/Instagram.svg"
                alt="Instagram"
                width={14}
                height={14}
                className="w-[14px] h-[14px] opacity-100"
              />
              <Image
                src="/blog-detail/Twitter.svg"
                alt="Twitter"
                width={15}
                height={16}
                className="w-[15px] h-[15.46875px] opacity-100"
              />
            </div>
          </div>
          <div className="mt-4">
            <Image
              src="/blog-detail/Sport.svg"
              alt="Sport"
              width={986}
              height={449}
              className="w-full max-w-[986px] h-auto aspect-[986/449] rounded-[12px] object-cover opacity-100"
            />
          </div>
          <p className="mt-6 w-full max-w-[986px] font-poppins text-[16px] leading-[28px] font-normal text-black">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using &apos;Content here, content here&apos;, making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for &apos;lorem ipsum&apos; will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like). It is a
            long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters, as
            opposed to using Content here, content here&apos;, making it look like
            readable English. Many desktop publishing packages and web page editors
            now use Lorem Ipsum as their default model text, and a search for
            &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
          <ul className="mt-4 w-full max-w-[986px] list-disc pl-4 font-poppins text-[16px] leading-[27px] font-normal text-black">
            <li>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
            <li>
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here, content
              here&apos;, making it look like readable English.
            </li>
            <li>
              Many desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for &apos;lorem ipsum&apos;
              will uncover many web sites still in their infancy.
            </li>
            <li>
              Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like). It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout.
            </li>
            <li>
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here, content
              here&apos;, making it look like readable English.
            </li>
          </ul>
          <h3 className="mt-4 w-full max-w-[900px] font-poppins font-semibold text-[28px] leading-[48px] text-black">
            Angetrieben von Leidenschaft: Die Geschichten, die definieren
          </h3>
          <p className="mt-4 w-full max-w-[986px] font-poppins text-[16px] leading-[27px] font-normal text-black">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters, as
            opposed to using &apos;Content here, content here&apos;, making it look like
            readable English. Many desktop publishing packages and web page editors
            now use Lorem Ipsum as their default model text, and a search for
            &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>
          <ul className="mt-4 w-full max-w-[986px] list-disc pl-4 font-poppins text-[16px] leading-[27px] font-normal text-black">
            <li>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </li>
            <li>
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here, content
              here&apos;, making it look like readable English.
            </li>
            <li>
              Many desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for &apos;lorem ipsum&apos;
              will uncover many web sites still in their infancy.
            </li>
            <li>
              Various versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like). It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout.
            </li>
            <li>
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here, content
              here&apos;, making it look like readable English.
            </li>
          </ul>
        </div>
      </section>
      <div className="w-full bg-[#EEF2FF] mt-[100px]">
        <div className="mx-auto w-full max-w-[1366px] px-6 sm:px-6 lg:px-6 flex flex-col items-center pb-16">
          <h2 className="pt-[59px] w-full max-w-[703px] font-poppins font-bold text-[41px] leading-[39px] tracking-[0.02em] text-[#373737] text-center capitalize">
            Weitere Blogs anzeigen
          </h2>
          <div className="mt-[84px] w-full grid grid-cols-1 gap-6 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 lg:gap-10 justify-items-center">
            {cards.slice(0, 4).map((card) => (
              <BlogDetailCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
