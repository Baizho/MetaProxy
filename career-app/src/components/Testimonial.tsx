interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
}

export default function Testimonial({ quote, author, role }: TestimonialProps) {
    return (
        <div className="bg-gray-200 shadow-lg rounded-xl p-6 md:p-8 transform transition-transform duration-300 hover:scale-105 active:scale-110">
            <blockquote className="text-lg md:text-xl text-blue-800 mb-4">
                &ldquo;{quote}&rdquo;
            </blockquote>
            <div className="flex items-center">
                <div className="ml-4">
                    <h3 className="text-xl font-bold text-blue-800">{author}</h3>
                    <p className="text-blue-600">{role}</p>
                </div>
            </div>
        </div>
    );
}
