// components/ContentCard.tsx
// Ensure this is a named export

// Define the shape of your sector data
interface Sector {
  id: number;
  title: string;
  heading: string;
  subItems: string[];
}

interface ContentCardProps {
  data: Sector;
}

"use client";
import { motion } from "framer-motion";
import React from 'react';

export const ContentCard = ({ data }: { data: any }) => {
  if (!data) return null;
  return (
    <div className="p-10 border rounded-xl bg-white shadow-lg">
      <h2 className="text-3xl font-bold text-black">{data.heading}</h2>
      <ul className="mt-4">
        {data.subItems.map((item: string, idx: number) => (
          <li key={idx} className="text-gray-600">- {item}</li>
        ))}
      </ul>
    </div>
  );
};