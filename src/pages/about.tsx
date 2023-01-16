import clsx from "clsx";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components";
import { boldFont, regularFont } from "../fonts";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>TypeSafe Travellers | About</title>
        <meta name="description" content="Group Trip Planning App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main
        className={clsx(
          "my-auto lg:mx-12",
          "flex flex-col gap-2",
          "h-[calc(100vh-70px)]",
          "items-center justify-center text-center",
        )}
      >
        <div className={clsx("px-6 pt-3", "lg:px-12 lg:pt-12 lg:pb-3")}>
          <div
            className={clsx(
              `${boldFont.className}`,
              "text-4xl lg:text-8xl",
              "pb-3 lg:pb-5",
              "dark:text-cyan-50",
            )}
          >
            TypeSafe Travellers
          </div>

          <div
            className={clsx(
              "lg:text-2xl",
              "text-justify",
              `${regularFont.className}`,
            )}
          >
            Welcome to our group trip-planning app! We are a team of travel
            enthusiasts who understand the challenges of planning a group trip.
            We created this app to make the process as easy and stress-free as
            possible. Our web app allows users to create a trip itinerary, share it
            with their group, and collaborate on details such as accommodations,
            transportation, and activities. We believe that group trip planning
            should be fun and exciting, not overwhelming. That&apos;s why
            we&apos;ve designed our app to be user-friendly and intuitive. Thank
            you for choosing our group trip-planning app. Bon voyage!
          </div>

          <div
            className={clsx(
              `${boldFont.className}`,
              "text-3xl lg:text-5xl",
              "pt-3",
              "dark:text-cyan-50",
            )}
          >
            Tech Stack
          </div>
          <div
            className={clsx(
              "lg:text-2xl",
              "text-justify",
              `${regularFont.className}`,
            )}
          >
            This app has been built using the T3 stack initialized using
            create-t3-app. The frontend is built using Next.js, React, Tailwind
            CSS, and Radix UI. NextAuth.js is being used for passwordless
            authentication. The backend is built using Prisma, tRPC, and
            PlanetScale &#40;Serverless MySQL&#41;. The app is deployed on
            Repl.it.
          </div>

          <div
            className={clsx(
              `${boldFont.className}`,
              "text-3xl lg:text-5xl",
              "pt-3 lg:pb-1",
              "dark:text-cyan-50",
            )}
          >
            Team
          </div>
          <div className={clsx("lg:text-3xl", `${regularFont.className}`)}>
            <Link
              className={clsx(
                "text-sky-600 hover:text-sky-700",
                "dark:text-emerald-100 dark:hover:text-emerald-200",
              )}
              href={"https://github.com/AyanavaKarmakar"}
              target={"_blank"}
            >
              Ayanava Karmakar
            </Link>
            {" // "}
            <Link
              className={clsx(
                "text-sky-600 hover:text-sky-700",
                "dark:text-emerald-100 dark:hover:text-emerald-200",
              )}
              href={"https://github.com/ssarkar551"}
              target={"_blank"}
            >
              Subham Sarkar
            </Link>
            {" // "}
            <Link
              className={clsx(
                "text-sky-600 hover:text-sky-700",
                "dark:text-emerald-100 dark:hover:text-emerald-200",
              )}
              href={"https://github.com/Nishith-Savla"}
              target={"_blank"}
            >
              Nishith Savla
            </Link>
          </div>

          <footer
            className={clsx(
              `${regularFont.className}`,
              "text-xl lg:text-xl",
              "pt-6 lg:pt-10",
              "flex flex-col gap-0",
            )}
          >
            <div className={clsx("text-2xl")}>
              &copy;{` ${new Date().getFullYear()} `}
              <Link
                className={clsx(
                  "text-2xl lg:text-2xl",
                  "text-blue-600 hover:text-blue-700",
                  "dark:text-sky-200 dark:hover:text-sky-300",
                )}
                href={"https://github.com/TypeSafe-Travellers"}
                target={"_blank"}
              >
                TypeSafe Travellers
              </Link>{" "}
            </div>
            <div>
              Open-Source —{" "}
              <Link
                className={clsx(
                  "text-purple-600 hover:text-purple-700",
                  "dark:text-purple-300 dark:hover:text-purple-400",
                )}
                href={"https://github.com/TypeSafe-Travellers/App"}
                target={"_blank"}
              >
                GitHub
              </Link>{" "}
              &amp;{" "}
              <Link
                className={clsx(
                  "text-orange-700 hover:text-orange-800",
                  "dark:text-orange-400 dark:hover:text-orange-500",
                )}
                href={
                  "https://replit.com/@AyanavaKarmakar/apptypesafetravellers"
                }
                target={"_blank"}
              >
                Repl.it
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default About;
