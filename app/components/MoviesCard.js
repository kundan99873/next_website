import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MoviesCard({ id, image, title, summary }) {
  return (
    <>
      <div className="m-2">
        <div class="card" style={{ width: "18rem" }}>
          <Image src={image} alt="..." height={210} width={285} />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{summary}</p>
            <Link href={`/movies/${id}`} class="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
