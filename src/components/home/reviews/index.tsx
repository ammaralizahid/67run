"use client";

import Image from "next/image";

const reviewData = [
  {
    id: 1,
    text: "Running Used To Be A Solitary Activity For Me, But The Social Events Organized By The Club Changed That. From Post-Run Brunches To Themed Runs.",
    rating: 5,
    name: "Sarah Barnes",
    role: "Designer",
    image: "/reviews/sarah.svg",
    bgColor: "#FC7BA2",
    textColor: "white",
  },
  {
    id: 2,
    text: "Running Used To Be A Solitary Activity For Me, But The Social Events Organized By The Club Changed That. From Post-Run Brunches To Themed Runs.",
    rating: 5,
    name: "Sabrina James",
    role: "Influencer",
    image: "/reviews/sabrina.svg",
    bgColor: "#B8C5F8",
    textColor: "black",
  },
];


const reviewers = [
  "/reviews/user1.png",
  "/reviews/user2.svg",
  "/reviews/user3.svg",
  "/reviews/user4.svg",
];

export default function Reviews() {
  return (
    <section className="w-full pb-20">
      <div className="max-w-[1366px] mx-auto px-6 flex flex-col lg:flex-row gap-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col lg:w-1/3">
          <span className="text-sm font-medium text-gray-500 mb-2">
            Referenzen
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tausend Kunden Vertrauen Darauf
          </h2>
          <p className="text-gray-600 mb-6">
            Aliquam Lorem Ante Dapibus In Viverra Quis Feugiat A Tellus.
            Phasellus Viverra Metus.
          </p>

          {/* REVIEWER IMAGES */}
          {/* REVIEWER IMAGES + COUNT */}
          <div className="flex items-center mt-4">
            {/* Overlapping Images */}
            <div className="flex -space-x-5">
              {reviewers.map((img, idx) => (
                <div
                  key={idx}
                  className="w-12 h-12 rounded-full border-white overflow-hidden relative z-[10]"
                >
                  <Image
                    src={img}
                    alt={`Reviewer ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Texts */}
            <div className="ml-1 flex flex-col">
              <span className="text-gray-900 font-bold text-lg">5 K+</span>
              <span className="text-gray-600 text-sm">Happy Runners</span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: SCROLLABLE CARDS */}
        <div className="overflow-x-auto flex gap-6 snap-x snap-mandatory px-6">
        {reviewData.map((review) => (
  <div
    key={review.id}
    style={{ backgroundColor: review.bgColor }}
    className="flex-shrink-0 snap-start p-6 rounded-xl w-80 shadow-lg relative"
  >
    <p className={`text-${review.textColor} text-sm mb-4`}>{review.text}</p>
    <div className="flex items-center mb-4">
      {Array.from({ length: review.rating }).map((_, idx) => (
        <svg
          key={idx}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.075 9.382c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.955z" />
        </svg>
      ))}
    </div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-white">
        <Image
          src={review.image}
          alt={review.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h4 className={`font-semibold text-sm text-${review.textColor}`}>
          {review.name}
        </h4>
        <p className={`text-xs text-${review.textColor}`}>{review.role}</p>
      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
}
