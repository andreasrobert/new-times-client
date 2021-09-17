import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../pages";

export default function useNewsAPI(props: { source: string }) {
  const { searching, search } = useContext(SearchContext);
  
  const [data, setData] = useState([]);
  const [home, setHome] = useState(true);


  useEffect(() => {
    //THE GUARDIAN
    const getInitGuardian = async () => {
      const res = await fetch(
        `https://content.guardianapis.com/world/indonesia?api-key=3196b1b1-282b-4ffd-b353-9dad8ea11375`
      );
      const result = await res.json();
      setData(result.response.results);
    };

    const searchGuardian = async (search: string) => {
      const res = await fetch(
        `https://content.guardianapis.com/search?q=${search}&api-key=3196b1b1-282b-4ffd-b353-9dad8ea11375`
      );
      const result = await res.json();
      setData(result.response.results);
    };

    //THE NEW YORK TIMES
    const getInitNYT = async () => {
      const res = await fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=dh4O0ayB8CQgCKHI1GT6GzXIs2UW7SYe`
      );
      const result = await res.json();
      setData(result.results);
      setHome(true);
    };

    const searchNYT = async (search: string) => {
      const res = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=dh4O0ayB8CQgCKHI1GT6GzXIs2UW7SYe`
      );
      const result = await res.json();
      setData(result.response.docs);
      setHome(false);
    };

    if (searching) {
      if (props.source === "guardian") searchGuardian(search);
      if (props.source === "nyt") searchNYT(search);
    } else {
      if (props.source === "guardian") getInitGuardian();
      if (props.source === "nyt") getInitNYT();
    }
  }, [searching, search, props.source]);

  return { data, home  };
}
