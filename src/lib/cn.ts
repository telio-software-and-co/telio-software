export const cn = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

export const wrap = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";
