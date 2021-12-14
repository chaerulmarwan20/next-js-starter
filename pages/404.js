import { useEffect } from "react";
import { useRouter } from "next/router";

const Page404 = () => {
  const router = useRouter();

  useEffect(() => setTimeout(() => router.push("/"), 5000), []);

  return (
    <div>
      <h1 className="title-not-found">Ooops...</h1>
      <h2 className="title-not-found">Page Not Found</h2>
    </div>
  );
};

export default Page404;
