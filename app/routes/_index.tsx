import type { MetaFunction } from "@remix-run/node";
import styleReset from "~/styles/reset.css?url";
import styleMain from "~/styles/main.scss?url";



export default function Index() {
  return (
    <div className="main-page">
      <h1 className="main-page__title">Welcome to Remix</h1>
      <div className="main-page__img">
        <img src="/public/img/remix-logo.png" alt="" />
      </div>
    </div>
  );
}
export const meta: MetaFunction = () => {
  return [
    { title: "Remix" },
    { name: "description", content: "Welcome to Remix" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styleReset },
  { rel: "stylesheet", href: styleMain },
];