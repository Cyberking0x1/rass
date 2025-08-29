import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-8 border border-gray-100 flex flex-col items-start">
      <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h5 className="text-xl font-bold text-gray-900 mb-2">{title}</h5>
      <div className="font-normal text-gray-500">{children}</div>
    </div>
  );
}

export default FeatureCard;
            {title}
