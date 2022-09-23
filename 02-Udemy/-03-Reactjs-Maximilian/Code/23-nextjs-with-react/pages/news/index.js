import { Fragment } from "react";
import Link from "next/link";
const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great">NextJs is a great framwork</Link>{" "}
        </li>
        <li>Really it is goOd</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
