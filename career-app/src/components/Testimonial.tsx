// components/Testimonial.tsx
interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
}

export default function Testimonial({ quote, author, role }: TestimonialProps) {
    return (
        <div className="bg-white shadow-md rounded-md p-8">
            <blockquote className="text-lg text-gray-600 mb-4">
                &ldquo;{quote}&rdquo;
            </blockquote>
            <div className="flex items-center">
                <div className="ml-4">
                    <h3 className="text-xl font-bold">{author}</h3>
                    <p className="text-gray-500">{role}</p>
                </div>
            </div>
        </div>
    );
}