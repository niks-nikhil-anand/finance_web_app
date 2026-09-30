import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import qr from "../../../public/qr.png";
import googlePlay from "../../../public/gp.svg";

// TODO: replace with the real Play Store listing URL.
const PLAY_STORE_URL = null;

const perks = ["GST and ITR filing on the go", "Exclusive loan and credit card offers", "Track your applications in real time"];

export default function AppDownload() {
  return (
    <section aria-labelledby="app-title" className="bg-primary-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-14 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div className="text-center md:text-left">
          <h2 id="app-title" className="text-3xl font-bold text-white">Download the Legal257 app</h2>
          <ul className="mt-5 space-y-2">
            {perks.map((p) => (
              <li key={p} className="flex items-center justify-center gap-2 text-primary-100 md:justify-start">
                <CheckCircle2 aria-hidden className="h-5 w-5 text-accent-300" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6 rounded-2xl bg-white p-5">
          <Image src={qr} alt="QR code to download the Legal257 app" width={112} height={112} className="h-28 w-28" />
          <div>
            <p className="mb-3 text-sm font-medium text-ink">Scan to download</p>
            {PLAY_STORE_URL ? (
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Image src={googlePlay} alt="Get it on Google Play" width={150} height={45} />
              </a>
            ) : (
              <Image src={googlePlay} alt="Available on Google Play" width={150} height={45} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
