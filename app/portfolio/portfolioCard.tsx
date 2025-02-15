import React from "react";
import Image from "next/image";

export default function PortfolioCard() {
    return(
        <div>
            <Image src={blog.imageURL} alt={blog.title} fill className="rounded-t-md object-cover" />
        </div>
    );
}