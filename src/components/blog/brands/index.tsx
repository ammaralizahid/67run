import BlogCard, { BlogBrandCard } from "./BlogCard";
import Button from "@/components/layout/button";
type BlogBrandsProps = {
  cards: BlogBrandCard[];
};

export default function BlogBrands({ cards }: BlogBrandsProps) {
  return (
    <section className="w-full mt-[40px] opacity-100 overflow-x-hidden">
      <div className="relative w-full max-w-[1366px] mx-auto px-6 sm:px-6 lg:px-6">
        
        <div className=" w-full">
          <h2 className="mx-auto w-full max-w-[617px] font-poppins font-bold text-[32px] sm:text-[40px] lg:text-[43px] leading-[39px] text-[#373737] text-center capitalize">
          Ereignisprotokolle
          </h2>
        </div>
        <div className="mt-8 mb-8 w-full grid grid-cols-1 gap-6 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 lg:gap-10 justify-items-center">
          {cards.map((card) => (
            <BlogCard key={card.id} card={card} />
          ))}
        </div>
        <div className="w-full flex justify-center mb-5">
          <Button className="w-[171px] h-[48px] rounded-[5px] opacity-100">
            Mehr anzeigen
          </Button>
        </div>
      </div>
    </section>
  );
}

