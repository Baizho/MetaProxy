// components/FilterBar.tsx
import { useState } from "react";

interface FilterBarProps {
    filter: string;
    setFilter: (filter: string) => void;
}

export default function FilterBar({ filter, setFilter }: FilterBarProps) {
    return (
        <div className="mb-4">
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search events..."
                className="w-full p-2 border rounded-md"
            />
        </div>
    );
}