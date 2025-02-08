'use client'
import { useState, useEffect } from "react";
import Testimonial from "@/components/Testimonial";
import { useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();
  const [events, setEvents] = useState<any[]>([]);

  const testimonials = [
    {
      quote: "The career guidance application helped me discover my passion and choose the right path for me.",
      author: "John Doe",
      role: "Student",
    },
    {
      quote: "This platform provided invaluable insights and resources to guide my students towards their dreams.",
      author: "Jane Smith",
      role: "Teacher",
    },
    {
      quote: "Thanks to this app, I found a fulfilling career that aligns with my interests and skills.",
      author: "Emily Johnson",
      role: "Alumni",
    },
  ];
  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-gray-200 py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Pro Career</h1>
        <p className="text-2xl mb-10">Find your path to success with our career guidance tools.</p>
        <div className="flex justify-center">
          {
            session?.user?.id ? (
              <a
                href="/tests"
                className="bg-gray-200 text-blue-900 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 active:scale-110"
              >
                Take a test!
              </a>
            ) :
              (

                <a
                  href="/auth/login"
                  className="bg-gray-200 text-blue-900 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 active:scale-110"
                >
                  Take a test!
                </a>
              )
          }
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-900">Featured Career Events</h2>
        <p className="text-blue-900">No upcoming events available.</p>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-gray-200 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Hear from Our Students</h2>
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
      </section>

      {/* Call-to-Action */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-900">Explore More</h2>
        <div className="flex justify-center">
          {
            session?.user?.id ? (
              <a
                href="/tests"
                className="bg-blue-900 text-white hover:bg-blue-800 font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 active:scale-110"
              >
                Take a test!
              </a>
            ) :
              (

                <a
                  href="/auth/login"
                  className="bg-blue-900 text-white hover:bg-blue-800 font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 active:scale-110"
                >
                  Take a test!
                </a>
              )
          }
        </div>
      </section>
    </div>
  );
}
