"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const blogs = [
  { title: "Optimized for Conversions", slug: "content", imageURL: "/file.svg" },
  { title: "The Future of Web Design", slug: "future-of-web-design", imageURL: "/globe.svg" },
  { title: "SEO Strategies for 2024", slug: "seo-strategies-2024", imageURL: "/images/blog3.jpg" },
];

export default function BlogList() {  
  return (
    
    <div className="py-10 lg:py-[80px] flex flex-col items-center">
      
      <h2 className="text-center font-[zain] text-4xl md:text-6xl lg:text-7xl px-5 w-full max-w-[850px] mx-auto">
        Writings from our team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-[1280px] px-5">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/blog/${blog.slug}`} passHref>
            <Card className="cursor-pointer shadow-lg hover:shadow-xl transition duration-300">
              <CardContent className="p-0">
                <AspectRatio ratio={16 / 9}>
                  <Image src={blog.imageURL} alt={blog.title} fill className="rounded-t-md object-cover" />
                </AspectRatio>
              </CardContent>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
