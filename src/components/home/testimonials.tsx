import { Star } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "David Kim",
      location: "Toronto, ON",
      rating: 5,
      text: "I needed to see a dermatologist urgently. CareConnect found me an appointment within 3 days when my doctor said the typical wait was 6 weeks. The AI recommendation was spot on, and the entire process was seamless.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      name: "Sarah Rodriguez",
      location: "Ottawa, ON",
      rating: 4.5,
      text: "As someone who lives with a disability, finding accessible clinics is crucial. CareConnect made it easy to filter for wheelchair accessibility, and the virtual appointment option was perfect for my needs.",
      avatar:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      name: "Robert Thompson",
      location: "Hamilton, ON",
      rating: 4,
      text: "After waiting months for an MRI appointment, I tried CareConnect. Within minutes, I found a clinic with an opening due to a cancellation the following week. The reminders kept me organized, and I got my results faster than I thought possible.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    },
  ];

  // Render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 fill-opacity-50" />
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 font-heading sm:text-4xl">
            What our users are saying
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Here&apos;s how CareConnect Ontario is helping patients across the
            province.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Image
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={`Portrait of ${testimonial.name}`}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="text-gray-600 italic">{`"${testimonial.text}"`}</p>
              <p className="mt-4 text-sm text-gray-500">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
