// app/dashboard/student/tests/page.tsx
'use client'
export default function TestsPage() {
    return (
        <div className="flex flex-col space-y-4 p-8">
            <h1 className="text-2xl font-bold">Available Tests</h1>
            <ul className="space-y-2">
                <li className="p-4 bg-gray-100 rounded-md">
                    <a href="#" className="text-blue-500 hover:underline">
                        Interest Test
                    </a>
                </li>
                <li className="p-4 bg-gray-100 rounded-md">
                    <a href="#" className="text-blue-500 hover:underline">
                        Aptitude Test
                    </a>
                </li>
            </ul>
        </div>
    );
}