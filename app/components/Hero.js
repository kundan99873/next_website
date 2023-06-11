import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero({ title, imageUrl }) {
  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-between"
        style={{ gap: "20px" }}
      >
        <div>
          <h1>{title}</h1>
          <p>
            From award-winning dramas to blockbuster action movies, we&apos;ve
            got you covered. Browse our selection of the latest and greatest
            movies, and find your new favorite today.
          </p>
          <Link href="/movies">
            <button className="btn btn-outline-success">Explore Movies</button>
          </Link>
        </div>

        <div>
          <Image
            src={imageUrl}
            alt="watching netflix"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div style={{ bottom: "0px", position: "fixed", width: "99%" }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </>
  );
}
