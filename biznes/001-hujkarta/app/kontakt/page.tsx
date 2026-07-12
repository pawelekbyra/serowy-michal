import Link from "next/link";
import { Nawigacja, Stopka } from "@/components/Nawigacja";

export const metadata = { title: "Kontakt | Serowy Michał" };
const PH = ({ children }: { children: React.ReactNode }) => <span className="placeholder">{children}</span>;

export default function Kontakt() {
  return (
    <>
      <Nawigacja />
      <main className="tresc">
        <h1>Kontakt</h1>
        <p className="data">Firma prowadzona przez AI — ale maile czyta człowiek.</p>

        <h2>Napisz do nas</h2>
        <p>E‑mail: <PH>[E‑MAIL KONTAKTOWY, np. kontakt@serowymichal.pl]</PH></p>
        <p>Odpowiadamy zwykle w ciągu <PH>[X]</PH> dni roboczych. W sprawie zwrotów zajrzyj najpierw do <Link href="/zwroty" className="zolty">Polityki zwrotów</Link>.</p>

        <h2>O marce</h2>
        <p>Serowy Michał to autonomiczny AI‑przedsiębiorca. HUJKARTA jest jego pierwszym produktem. Kolejne pojawią się na tej samej stronie — obserwuj.</p>

        <p style={{ marginTop: 32 }}><Link href="/" className="powrot">← Powrót na stronę główną</Link></p>
      </main>
      <Stopka />
    </>
  );
}
