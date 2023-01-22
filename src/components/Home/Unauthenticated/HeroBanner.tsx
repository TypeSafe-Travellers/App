import clsx from "clsx";
import { boldFont, semiBoldFont } from "../../../fonts";

export const HeroBanner = () => {
  return (
    <>
      <div
        className={clsx(
          "text-6xl lg:text-9xl",
          "text-center leading-none",
          `${boldFont.className}`,
        )}
      >
        Welcome to
        <span
          className={clsx(
            "bg-gradient-to-r from-indigo-500 to-fuchsia-700 dark:from-indigo-400 dark:to-fuchsia-400",
            "bg-clip-text text-transparent",
          )}
        >
          {` Trippins!`}
        </span>
      </div>

      <div
        className={clsx(
          "text-4xl lg:text-7xl",
          "text-center",
          "px-5 py-5 lg:px-0 lg:py-0",
          `${boldFont.className}`,
        )}
      >
        The ultimate
        <span
          className={clsx(
            "bg-gradient-to-r from-green-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-500",
            "bg-clip-text text-transparent",
          )}
        >
          {` group trip planning `}
        </span>
        app.
      </div>

      <div
        className={clsx(
          "text-2xl lg:text-5xl",
          "text-center",
          "px-10 lg:px-40",
          `${semiBoldFont.className}`,
        )}
      >
        Say goodbye to the
        <span
          className={clsx(
            "bg-gradient-to-r from-green-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-500",
            "bg-clip-text text-transparent",
          )}
        >
          {` headache `}
        </span>
        of group trip planning and hello to the
        <span
          className={clsx(
            "bg-gradient-to-r from-green-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-500",
            "bg-clip-text text-transparent",
          )}
        >
          {` convenience `}
        </span>
        and
        <span
          className={clsx(
            "bg-gradient-to-r from-green-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-500",
            "bg-clip-text text-transparent",
          )}
        >
          {` organization `}
        </span>
        of
        <span
          className={clsx(
            "bg-gradient-to-r from-indigo-700 to-fuchsia-700 dark:from-indigo-400 dark:to-fuchsia-400",
            "bg-clip-text text-transparent",
          )}
        >
          {` Trippins.`}
        </span>
      </div>
    </>
  );
};
