import Card from "../components/card";

export default function Prologue() {
  return (
    <div id="page1" className="py-4 min-h-screen snap-center flex justify-center items-center">
      <div className="animate-fade-down flex flex-col gap-4">
        <Card
          title="Kelompok Praktikum 1"
          img="/egg-balloons/profile.jpg"
        >
          <p className="text-pretty text-sm">
            Galih | Tiara | Vino | Revana | Sukma | Syekhilla
          </p>
        </Card>
      </div>
    </div>
  );
}
