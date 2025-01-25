import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    // const [data, setData] = React.useState([]);
    const data = useLoaderData();

    return <div>{data.followers}
    <img src={data.avatar_url} alt="" />
    </div>;
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kishanghosh090");
  const data = await response.json();
  return data;
};
