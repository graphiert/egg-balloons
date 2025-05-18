import Card from "../components/card";

export default function Docs() {
  return (
    <div
      id="page6"
      className="py-4 min-h-screen snap-center flex justify-center items-center flex-col gap-4"
    >
      <div className="flex">
        <Card title="Dokumentasi" centerizeTitle />
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        <Card img="/egg-balloons/docs/1.jpg" />
        <Card img="/egg-balloons/docs/2.jpg" />
        <Card img="/egg-balloons/docs/3.jpg" />
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        <Card img="/egg-balloons/docs/4.jpg" />
        <Card img="/egg-balloons/docs/5.jpg" />
        <Card img="/egg-balloons/docs/6.jpg" />
      </div>
    </div>
  );
}
