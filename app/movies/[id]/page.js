import Image from "next/image";
import React from "react";

const getdata = async (id) => {
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b55229d3cfmsh3eb43b1bce99df8p1fbcf6jsn121b893619f7",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result[0].details;
  } catch (error) {
    console.error(error);
  }
};

export default async function page({ params }) {
  const data = await getdata(params.id);
  //   console.log(data);
  return (
    <div className="container">
      <h1>
        NETFLIX/
        <span style={{ color: "green" }}>{data.type.toUpperCase()}</span>
      </h1>
      <Image
        src={data.backgroundImage.url}
        alt={data.title}
        width={800}
        height={400}
        style={{ borderRadius: "10px" }}
      />
      <h1>Title : {data.title}</h1>

      <h5>No. of Seasons : {data.seasonCount} seasons</h5>
      <p>Summary : {data.synopsis}</p>
      <p>Released Year : {data.releaseYear}</p>
      <p>Star Cast : {data.cast.map((ele) => ele.name + ", ")}</p>
      <p>Creators : {data.creators.map((ele) => ele.name + ", ")}</p>
    </div>
  );
}
