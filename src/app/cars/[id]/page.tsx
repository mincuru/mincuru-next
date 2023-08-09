export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <h1>Hello, Next.js! ID {params.id} page</h1>
    </>
  );
}
