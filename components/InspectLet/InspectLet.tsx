import React, { useEffect } from "react";
import insp, { install } from "inspectlet-es";
import { useRouter } from "next/router";

// ===== InspectLet ID =========
// 1413794475 Inspectlet ID
install(1848202761);

const InspectLet = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   if (router.isReady) {
  //     let { email, id } = JSON.parse(window.localStorage.getItem("auth_user"));
  //     insp(["identify", { id: id, email: email }]);
  //     insp(["tagSession", { log: "Logged In" }]);
  //   }
  // }, [router.isReady]);

  return <></>;
};

export default InspectLet;
