import MoviesCard from "../components/MoviesCard";

const getdata = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b55229d3cfmsh3eb43b1bce99df8p1fbcf6jsn121b893619f7",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.titles;
  } catch (error) {
    console.error(error);
  }
};

export default async function page() {
  const dataimg = await getdata();
  //   console.log(data);

  return (
    <>
      <div className="m-3 justify-content-center align-items-center d-flex flex-wrap">
        {dataimg.map((ele) => {
          return (
            <div key={ele.jawSummary.id}>
              {/* {const imgss = ele.backgroundImage} */}
              {
                <MoviesCard
                  title={ele.jawSummary.title}
                  id={ele.jawSummary.id}
                  summary={ele.jawSummary.synopsis}
                  image={ele.jawSummary.backgroundImage.url}
                />
              }
            </div>
          );
        })}
      </div>
    </>
  );
}
