import dynamic from "next/dynamic";

export const InspWrapper = dynamic(() => import("./InspectLet"), {
  ssr: false,
});
