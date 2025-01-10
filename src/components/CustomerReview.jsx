import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const reviews = [
  {
    name: "John Doe",
    avatar: "/placeholder.svg?height=50&width=50",
    review:
      "I recently purchased this product and I'm extremely satisfied with my experience. ",
    date: "May 15, 2023",
    rating: 4,
  },
  {
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=50&width=50",
    review:
      "The product is exactly what I was looking for. It works perfectly, and the customer service was very responsive...",
    date: "June 20, 2023",
    rating: 5,
  },
  {
    name: "Sam Brown",
    avatar: "/placeholder.svg?height=50&width=50",
    review:
      "Excellent product, exceeded my expectations! Would definitely buy again. Would definitely buy again.",
    date: "July 10, 2023",
    rating: 5,
  },
  {
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=50&width=50",
    review:
      "The product is exactly what I was looking for. It works perfectly, and the customer service was very responsive...",
    date: "June 20, 2023",
    rating: 5,
  },
  {
    name: "Sam Brown",
    avatar: "/placeholder.svg?height=50&width=50",
    review:
      "Excellent product, exceeded my expectations! Would definitely buy again. Would definitely buy again",
    date: "July 10, 2023",
    rating: 5,
  },
  // Add more reviews here...
];

export default function CustomerReview() {
  return (
    <div className="p-10 lg:py-32">
      <div className="w-full mx-auto ">
        <Swiper
          // Default to 3 cards at once
          navigation={true} // Enable navigation buttons
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card className="w-full ">
                <CardHeader className="flex flex-row flex-wrap items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={review.avatar} alt="Customer avatar" />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Verified Customer
                    </p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 text-sm text-muted-foreground">
                    Posted on {review.date}
                  </div>
                  <p className="text-md leading-relaxed">{review.review}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
