import Button from "../components/button";
import Card from "../components/card";

export default function Prologue() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <Card
          title="Kelompok Praktikum 1"
          img="https://penguinui.s3.amazonaws.com/component-assets/card-img-1.webp"
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
