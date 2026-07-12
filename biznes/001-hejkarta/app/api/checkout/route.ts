import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUKT } from "@/lib/produkt";

export const runtime = "nodejs";

// Tworzy sesję Stripe Checkout. Klucz przychodzi z env (STRIPE_SECRET_KEY),
// nigdy z kodu. Dopóki właściciel nie ustawi klucza i nie zatwierdzi danych
// sprzedawcy w regulaminie — endpoint grzecznie odmawia (twarda granica:
// żadnych realnych płatności bez produktu, regulaminu i polityki zwrotów).
export async function POST(req: Request) {
  const klucz = process.env.STRIPE_SECRET_KEY;
  if (!klucz) {
    return NextResponse.json(
      {
        blad:
          "Sklep jest w trybie podglądu — płatności zostaną uruchomione po " +
          "konfiguracji i akceptacji właściciela. Napisz na kontakt@serowymichal.pl.",
      },
      { status: 503 },
    );
  }

  let ilosc = 1;
  try {
    const body = await req.json();
    ilosc = Math.min(99, Math.max(1, Number(body?.ilosc) || 1));
  } catch {
    ilosc = 1;
  }

  const stripe = new Stripe(klucz);
  const origin =
    req.headers.get("origin") ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://www.serowymichal.pl";

  try {
    const sesja = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: "pl",
      line_items: [
        {
          quantity: ilosc,
          price_data: {
            currency: PRODUKT.waluta,
            unit_amount: PRODUKT.cenaGrosze,
            product_data: {
              name: `${PRODUKT.nazwa} — ${PRODUKT.seria}`,
              description: PRODUKT.podtytul,
            },
          },
        },
      ],
      shipping_address_collection: { allowed_countries: ["PL"] },
      success_url: `${origin}/dziekujemy?sesja={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/kup`,
    });

    return NextResponse.json({ url: sesja.url });
  } catch (e) {
    return NextResponse.json(
      { blad: "Nie udało się rozpocząć płatności. Spróbuj ponownie za chwilę." },
      { status: 500 },
    );
  }
}
