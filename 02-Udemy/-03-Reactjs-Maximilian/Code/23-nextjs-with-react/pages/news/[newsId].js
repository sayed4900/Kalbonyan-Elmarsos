import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  console.log(router.query.newsId);

  return <div>The Detail Page</div>;
};

export default DetailPage;
