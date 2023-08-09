import Link from "next/link";
import HelloWorld from "../HelloWorld";
import User from "../components/User";

type Props = {
  data: {
    hoge: String;
  };
};

type Repo = {
  name: String;
  stargazers_count: number;
};

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      {/* <WithApollo> */}
      <User />
      {/* </WithApollo> */}
      <ul>
        <li>
          <Link href="/cars/1">cars/1</Link>
        </li>
        <li>
          <Link href="/cars/2">cars/2</Link>
        </li>
        <li>
          <Link href="/cars/3">cars/3</Link>
        </li>
      </ul>
    </div>
  );
}

// export const getStaticProps: GetStaticProps<{ repo: Repo }> = async () => {
//   const data = { hoge: "fuga" };
//   return {
//     props: data,
//   };
// };

// export const getStaticProps: GetStaticProps<{
//   repo: Repo;
// }> = async () => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const repo = await res.json();
//   return { props: { repo } };
// };
