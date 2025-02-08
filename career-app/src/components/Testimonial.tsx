// components/Testimonial.tsx
interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
}

export default function Testimonial({ quote, author, role }: TestimonialProps) {
    return (
        <div className="bg-gray-200 shadow-md rounded-md p-8">
            <blockquote className="text-lg text-blue-800 mb-4">
                &ldquo;{quote}&rdquo;
            </blockquote>
            <div className="flex items-center">
                <div className="ml-4">
                    <h3 className="text-xl font-bold text-blue-800">{author}</h3>
                    <p className="text-blue-800">{role}</p>
                </div>
            </div>
        </div>
    );
}