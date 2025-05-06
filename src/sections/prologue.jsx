import Button from "../components/button";
import Card from "../components/card";

export default function Prologue() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <Card
          title="Kelompok Praktikum 1"
          img="https://th.bing.com/th/id/OIP.MP40hOJoUwm-oWw72V1DMgHaD_"
        >
          <p className="text-pretty text-sm">
            Galih | Tiara | Vino | Revana | Sukma | Syekhilla
          </p>
        </Card>
        <Button href="#page2">Ayo!</Button>
      </div>
    </div>
  );
}
