// // app/events/index/page.tsx
// import { useState, useEffect } from "react";
// import dbConnect from "@/utils/db";
// import EventModel from "@/models/Event";
// import FilterBar from "@/components/Filterbar";
// import Pagination from "@/components/Pagination";
// import Card from "@/components/Card";

// export default function EventsPage() {
//     const [events, setEvents] = useState<Event[]>([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [eventsPerPage] = useState(10);
//     const [filter, setFilter] = useState("");

//     useEffect(() => {
//         const fetchEvents = async () => {
//             await dbConnect();
//             const events = await EventModel.find({ startDate: { $gte: new Date() } }).sort({ startDate: 1 });
//             setEvents(events);
//         };

//         fetchEvents();
//     }, []);

//     // Get current events
//     const indexOfLastEvent = currentPage * eventsPerPage;
//     const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//     const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

//     // Change page
//     const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//     return (
//         <div className="p-8">
//             <h1 className="text-2xl font-bold mb-4">Upcoming Career Events</h1>
//             <FilterBar filter={filter} setFilter={setFilter} />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {currentEvents.map((event: Event) => (
//                     <Card key={event._id} title={event.title} description={event.description} link={`/events/${event._id}`} />
//                 ))}
//             </div>
//             <Pagination
//                 eventsPerPage={eventsPerPage}
//                 totalEvents={events.length}
//                 paginate={paginate}
//                 currentPage={currentPage}
//             />
//         </div>
//     );
// }