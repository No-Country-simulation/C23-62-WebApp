import React from "react";

export const TestimonialCard = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "CEO, Example Co.",
      message:
        "Invertir en esta plataforma me permitió apoyar ideas innovadoras y generar un impacto positivo en el mundo. ",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "John Smith",
      role: "Developer, Tech World",
      message:
        "An outstanding experience. The attention to detail and support were phenomenal!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Alice Johnson",
      role: "Designer, Creative Studio",
      message:
        "I highly recommend this service. It exceeded all my expectations!",
      image: "https://via.placeholder.com/150",
    },

    {
        name: "Jane Doe",
        role: "CEO, Example Co.",
        message:
          "Invertir en esta plataforma me permitió apoyar ideas innovadoras y generar un impacto positivo en el mundo. ",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "John Smith",
        role: "Developer, Tech World",
        message:
          "An outstanding experience. The attention to detail and support were phenomenal!",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Alice Johnson",
        role: "Designer, Creative Studio",
        message:
          "I highly recommend this service. It exceeded all my expectations!",
        image: "https://via.placeholder.com/150",
      },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center  bg-white">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="max-w-[300px] bg-white border border-gray-200 shadow-md max-h-[300px] rounded-lg p-6 mb-8 "
        >
          <p className="text-black text-2xl font-bold ">
            "{testimonial.message}"
          </p>
          <div className="flex items-center mb-4">
          <img
            src={testimonial.image}
            alt={`${testimonial.name}'s profile`}
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </div>





        </div>
      ))}
    </div>
  );
};
