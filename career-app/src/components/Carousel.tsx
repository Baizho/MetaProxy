// // components/Carousel.tsx
// import { useState, useEffect } from "react";
// import { Event } from "@/types/Event";
// import Image from "next/image";

// interface CarouselProps {
//     events: Event[];
// }

// export default function Carousel({ events }: CarouselProps) {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [events]);

//     return (
//         <div className="relative overflow-hidden">
//             <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//                 {events.map((event, index) => (
//                     <div key={event._id} className="min-w-full">
//                         <div className="relative h-96">
//                             <Image
//                                 src="https://via.placeholder.com/1200x720"
//                                 alt={event.title}
//                                 fill
//                                 className="object-cover"
//                             />
//                             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//                             <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
//                                 <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
//                                 <p className="text-lg mb-4">{event.description}</p>
//                                 <a
//                                     href={`/events/${event._id}`}
//                                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                                 >
//                                     Learn More
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {events.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
//                             }`}
//                     ></button>
//                 ))}
//             </div>
//         </div>
//     );
// }