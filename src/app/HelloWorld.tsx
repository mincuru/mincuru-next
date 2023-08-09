export default async function HelloWorld() {
  const [staticData] = await Promise.all([
    fetch(`http://localhost:3000/api/`, { next: { revalidate: 20 } }),
  ]);

  return (
    <>
      <p>APIから取得したデータ</p>
      <p>{JSON.stringify(await staticData.json())}</p>
    </>
  );
}
