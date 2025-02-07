// app/page.tsx
'use client'

import { useState, useEffect } from "react";
import dbConnect from "@/utils/db";
import EventModel from "@/models/Event";
import Carousel from "@/components/Carousel";
import Testimonial from "@/components/Testimonial";
import { Event } from "@/types/Event";

export default function HomePage() {
  const [events, setEvents] = useState<Event[]>([]);
  // const [testimonials, setTestimonials] = useState([
  //   {
  //     quote:
  //       "The career guidance application helped me discover my passion and choose the right path for me.",
  //     author: "John Doe",
  //     role: "Student",
  //   },
  //   {
  //     quote:
  //       "This platform provided invaluable insights and resources to guide my students towards their dreams.",
  //     author: "Jane Smith",
  //     role: "Teacher",
  //   },
  //   {
  //     quote:
  //       "Thanks to this app, I found a fulfilling career that aligns with my interests and skills.",
  //     author: "Emily Johnson",
  //     role: "Alumni",
  //   },
  // ]);

  const testimonials = [{
    quote:
      "The career guidance application helped me discover my passion and choose the right path for me.",
    author: "John Doe",
    role: "Student",
  },
  {
    quote:
      "This platform provided invaluable insights and resources to guide my students towards their dreams.",
    author: "Jane Smith",
    role: "Teacher",
  },
  {
    quote:
      "Thanks to this app, I found a fulfilling career that aligns with my interests and skills.",
    author: "Emily Johnson",
    role: "Alumni",
  }]

  useEffect(() => {
    const fetchEvents = async () => {
      await dbConnect();
      const events = await EventModel.find({ startDate: { $gte: new Date() } }).sort({ startDate: 1 }).limit(3);
      setEvents(events);
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Career Guidance App</h1>
          <p className="text-xl mb-8">Find your path to success with our career guidance tools.</p>
          <div className="flex space-x-4 justify-center">
            <a
              href="/auth/login"
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </a>
            <a
              href="/auth/register"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </a>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Career Events</h2>
          {events.length > 0 ? (
            <Carousel events={events} />
          ) : (
            <p className="text-gray-600">No upcoming events available.</p>
          )}
        </div>
      </section>

      {/* Testimonials/Success Stories */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Hear from Our Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Buttons */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Explore More</h2>
          <div className="flex space-x-4 justify-center">
            <a
              href="/careers"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Explore Careers
            </a>
            <a
              href="/dashboard/student/tests"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Take Tests
            </a>
            <a
              href="/events"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              View Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}