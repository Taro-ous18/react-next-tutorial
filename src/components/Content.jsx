import { Certification } from "./Certification";
import { IntroduceMyself } from "./IntroduceMyself";
import { ThingsOfInterst } from "./ThingsOfInterst";

const Content = () => {
  return (
    <div style={{ backgroundColor: "white", width: "83%", margin: "0 auto", lineHeight: "100px"}}>
      <main>
        <p>こんにちは</p>
        <p>こんにちは</p>
        <p>こんにちは</p>
        <IntroduceMyself/>
        <Certification/>
        <ThingsOfInterst/>
      </main>
    </div>
  );
};

export { Content };
