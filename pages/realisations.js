import Head from "next/head";
import Image from "next/image";
import Header from "../pages/index";
import realisationJson from "../realisations.json";
console.log(realisationJson);

export default function Realisation() {
  return (
    <div className="realisations">
      <Header />
      <div></div>
    </div>
  );
}
