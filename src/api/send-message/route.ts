export async function POST(req: Request) {
  const body = await req.json();

  const { text } = body;

  const TOKEN = "8160441064:AAHGhEAvHtsh5rOY7VxIWwMHNxUJS5Ro1vU";
  const CHAT_ID = "8170071849"; // contoh: 123456789
  const TELEGRAM_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  try {
    await fetch(TELEGRAM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });

    return new Response(JSON.stringify({ ok: true }));
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error }), { status: 500 });
  }
}
