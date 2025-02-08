// // components/Card.tsx
// import Link from "next/link";
// import { Event } from "@/types/Event";

// interface CardProps {
//     title: string;
//     description: string;
//     link: string;
// }

// export default function Card({ title, description, link }: CardProps) {
//     return (
//         <div className="bg-white shadow-md rounded-md p-4">
//             <h2 className="text-lg font-bold mb-2">{title}</h2>
//             <p className="text-gray-600 mb-2">{description}</p>
//             <Link href={link} className="text-blue-500 hover:underline">
//                 Learn More
//             </Link>
//         </div>
//     );
// }