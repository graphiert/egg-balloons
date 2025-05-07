import Card from "../components/card";

export default function Ending() {
  return (
    <div id="page6" className="py-4 min-h-screen snap-center flex justify-center items-center">
      <div className="flex flex-col gap-4">
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
