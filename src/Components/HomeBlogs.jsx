import React from "react";

const newsData = [
  {
    id: 1,
    title: "HIGHLY TALENTED CHAMPIONS",
    date: "December 24, 2021",
    categories: ["Balls", "Swimming"],
    image:
      "https://images.unsplash.com/photo-1516569422865-0b51b31b0a9d?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Kerue secum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pre...",
  },
  {
    id: 2,
    title: "ACTIONS SPEAK LOUDER THAN COACHES",
    date: "December 24, 2021",
    categories: ["Balls", "Swimming"],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Verse cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, preti...",
  },
  {
    id: 3,
    title: "HARD LUCK IS COMPOSED OF LAZINESS",
    date: "December 24, 2021",
    categories: ["Balls", "Swimming"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Serques sem sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pre...",
  },
];

export default function LatestNews() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-red-600 font-bold uppercase tracking-widest text-lg mb-8">
        Our Blog
      </h2>
      <h1 className="text-4xl font-extrabold uppercase mb-12">Latest News</h1>

      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-3">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-white group duration-300"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
              <span className="flex items-center gap-1">
                🏷 {item.categories.join(", ")}
              </span>
              <span>•</span>
              <span>📅 {item.date}</span>
            </div>
            <h3 className="mt-4 font-extrabold group-hover:text-[#A70500] text-lg uppercase text-gray-900">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm px-4">{item.excerpt}</p>
            <div className="mt-4 pb-6">
              <a
                href="/blogs"
                className="text-[#A70500] font-semibold uppercase text-lg tracking-wider hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
