import { type NextPage } from "next";
import { LoginButton, Navbar, ThemeToggle } from "../components";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import { boldFont } from "../fonts";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({
    text: "We are the TypeSafe Travellers.",
  });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={clsx("flex min-h-screen items-center justify-center")}>
        {/** TODO - Placehold Banner. Should be removed later. */}
        <div className="flex flex-col items-center gap-10">
          <Link
            className="group relative mx-10 cursor-pointer"
            href={"https://github.com/TypeSafe-Travellers/App"}
            target={"_blank"}
          >
            <div
              className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-400 to-red-400 opacity-75 blur 
            transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:from-cyan-700 dark:to-cyan-700"
            ></div>
            <div className="relative flex items-center divide-x divide-black rounded-lg bg-gray-200 px-7 py-4 leading-none dark:bg-black">
              <p
                className={`mx-5 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text px-6 pt-5 text-center text-4xl text-transparent dark:from-cyan-600 dark:to-emerald-600 lg:text-7xl ${boldFont.className}`}
              >
                {hello.data ? hello.data.greeting : "Loading greeting..."}
              </p>
            </div>
          </Link>
          <LoginButton />
          <ThemeToggle />
        </div>
      </main>
    </>
  );
};

export default Home;
