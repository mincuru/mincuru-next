import { Suspense } from "react";
import Loading from "./loading";

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <section>{children}</section>
      </Suspense>
    </div>
  );
}
