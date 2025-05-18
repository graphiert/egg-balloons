import Card from "../components/card";

export default function Prologue({ withAnimate }) {
  return (
    <section className="py-4 min-h-screen snap-center flex justify-center items-center">
      <div className={`${withAnimate && "animate-fade-down"} flex flex-col gap-4`}>
        <Card
          centerizeTitle
          title="Kelompok Praktikum 1"
          img="/egg-balloons/profile.jpg"
        >
          <p className="text-pretty text-sm text-center">
            Galih | Tiara | Vino | Revana | Sukma | Syekhilla
          </p>
        </Card>
        {withAnimate && <Card>
          <p className="text-pretty text-sm text-center">
            Gunakan panah atas bawah pada keyboard untuk kemudahkan navigasi.
          </p>
        </Card>}
      </div>
    </section>
  );
}
