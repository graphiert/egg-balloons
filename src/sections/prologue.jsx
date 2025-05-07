import Card from "../components/card";

export default function Prologue() {
  return (
    <div id="page1" className="min-h-screen snap-center flex justify-center items-center">
      <div data-aos="fade-down" className="flex flex-col gap-4">
        <Card
          title="Kelompok Praktikum 1"
          img="/egg-balloons/profile.jpg"
        >
          <p className="text-pretty text-sm">
            Galih | Tiara | Vino | Revana | Sukma | Syekhilla
          </p>
        </Card>
        {/* <Button href="#page2">Ayo!</Button> */}
      </div>
    </div>
  );
}
