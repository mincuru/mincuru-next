// SSRのページ上で直接Prisma経由でデータを取得する例。
// このあとページネーションを実装してみるか
import { PrismaClient } from "@prisma/client";

export async function getPosts() {
  const prisma = new PrismaClient();
  return await prisma.post.findMany();
}

export default async function Page() {
  const posts = await getPosts();
  const lis = posts.map((post) => <li key={post.id}>{post.title}</li>);

  return (
    <div>
      <ul>{lis}</ul>
    </div>
  );
}
