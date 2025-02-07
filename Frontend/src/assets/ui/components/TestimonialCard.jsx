export const TestimonialCard = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "CEO, Example Co.",
      message:
        "Invertir en esta plataforma me permitió apoyar ideas innovadoras y generar un impacto positivo en el mundo. ",
      image: "perfil.jpg",
    },
    {
      name: "John Smith",
      role: "Developer, Tech World",
      message:
        "An outstanding experience. The attention to detail and support were phenomenal!",
      image: "perfil.jpg",
    },
    {
      name: "Alice Johnson",
      role: "Designer, Creative Studio",
      message:
        "I highly recommend this service. It exceeded all my expectations!",
      image: "perfil.jpg",
    },

    {
      name: "Jane Doe",
      role: "CEO, Example Co.",
      message:
        "Invertir en esta plataforma me permitió apoyar ideas innovadoras y generar un impacto positivo en el mundo. ",
      image: "perfil.jpg",
    },
    {
      name: "John Smith",
      role: "Developer, Tech World",
      message:
        "An outstanding experience. The attention to detail and support were phenomenal!",
      image: "perfil.jpg",
    },
    {
      name: "Alice Johnson",
      role: "Designer, Creative Studio",
      message:
        "I highly recommend this service. It exceeded all my expectations!",
      image: "perfil.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="max-w-md p-6 mt-5 mb-8 bg-white border border-gray-200 rounded-lg shadow-md max-h-md "
        >
          <p className="mt-2 text-2xl font-bold text-black ">
            "{testimonial.message}"
          </p>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
              className="w-12 h-12 border border-gray-300 rounded-full"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
