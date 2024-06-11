"use client";
import { callouts } from "../constants/categories";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="mx-auto max-w-2xl py-10 sm:py-22 lg:max-w-none lg:py-30">
      <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        {callouts.map((callout) => (
          <div key={callout.name} className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <Image
                src={callout.href}
                alt={callout.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a>
                <span className="absolute inset-0" />
                {callout.name}
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">
              {callout.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
