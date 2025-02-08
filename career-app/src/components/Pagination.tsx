// // components/Pagination.tsx
// import { useState } from "react";

// interface PaginationProps {
//     eventsPerPage: number;
//     totalEvents: number;
//     paginate: (pageNumber: number) => void;
//     currentPage: number;
// }

// export default function Pagination({ eventsPerPage, totalEvents, paginate, currentPage }: PaginationProps) {
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <nav>
//             <ul className="flex justify-center mt-4">
//                 {pageNumbers.map((number) => (
//                     <li key={number} className={`mx-1`}>
//                         <button
//                             onClick={() => paginate(number)}
//                             className={`px-3 py-1 rounded ${currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
//                                 }`}
//                         >
//                             {number}
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// }