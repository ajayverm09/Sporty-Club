import React from "react";

const AccessoriesSection = () => {
  const accessories = [
    {
      id: "01",
      title: "Men's Accessories",
      desc: "Euismod quis viverra nibh cras pulvinar mattis. Urnatpat lacus.",
      bg: "bg-white",
      text: "text-black",
      btn: "text-black",
      btnHover: "hover:bg-[#A70500] hover:text-white",
    },
    {
      id: "02",
      title: "Womens Accessories",
      desc: "Dui sapien eget mi proin sed. Elit scleue mauris pellennar pellentes.",
      bg: "bg-red-700",
      text: "text-white",
      btn: "text-white",
      btnHover: "hover:bg-white hover:text-[#A70500]",
    },
    {
      id: "03",
      title: "Kid's Accessories",
      desc: "Risus nullam eget felis eget nunc. Faus ts in eu mi bibem neqd per mor.",
      bg: "bg-neutral-900",
      text: "text-white",
      btn: "text-white",
      btnHover: "hover:bg-white hover:text-black",
    },
  ];

  return (
    <section className="grid md:grid-cols-3 text-left">
      {accessories.map((item, index) => (
        <div
          key={index}
          className={`${item.bg} ${item.text} p-10 flex flex-col justify-center space-y-5`}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase">
            {item.title}
          </h2>
          <p className="text-xl font-semibold">{item.id} —</p>
          <p className="text-base leading-relaxed">{item.desc}</p>
          <a
            href="#"
            className={`${item.btn} ${item.btnHover} font-semibold w-36 rounded-4xl py-2 px-2 uppercase text-md tracking-widest flex items-center space-x-2 transition-all duration-300 border-2 border-transparent hover:border-current`}
          >
            <span>Shop Now</span>
            <span>→</span>
          </a>
        </div>
      ))}
    </section>
  );
};

export default AccessoriesSection;