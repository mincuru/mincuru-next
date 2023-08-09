"use client";

// getApiはorvalで生成したAPIクライアント。これをfetcherとしてuseSWR()に渡して利用している。
import useSWR from "swr";
import { getApi } from "../../../api-client/default/default";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const User = () => {
  const { data, error } = useSWR("default", getApi);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.data.hoge}</h1>
      {/* <p>{data.description}</p> */}
      {/* <p>
        <strong>👁 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
      </p> */}
    </div>
  );

  // const { data, loading, error } = useQuery(ALL_USERS);
  // if (loading) {
  //   return <div>読み込み中</div>;
  // }
  // return (
  //   <div>
  //     {error && <div>{error.message}</div>}
  //     <ul>
  //       {data && data.users.map((v, i) => <li key={String(i)}>{v.name}</li>)}
  //     </ul>
  //   </div>
  // );
};

export default User;
