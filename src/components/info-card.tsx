import React from "react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-8 border border-gray-100 flex flex-col items-start">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <div className="font-normal text-gray-500">{children}</div>
    </div>
  );
}

export default InfoCard;