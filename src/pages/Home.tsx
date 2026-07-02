import { Link } from "react-router";
import Hero from "../sections/Hero";
import PlayingCardSection from "../sections/PlayingCardSection";

const cardSections = [
  {
    imageSrc: "/images/card-king-clubs.png",
    imageAlt: "Kreuz König",
    title: "ICH",
    subtitle: "Mathematikstuden in Hamburg. Analytisch unterwegs, neugierig auf Daten & KI - Und neben auch noch sportlich",
    description:
    <>Ich bin Philip, 4. Semester Mathematik an der Uni Hamburg. Was mich antreibt? Daten verstehen, Probleme knacken und Technologie sinnvoll einsetzen. In meiner Freizeit experimentiere ich gerne mit KI-Tools wie Kimi, Gemini (ja, auch die Bildgenerierung – nano-banana 2 lässt grüßen) und DeepSeek – nicht nur, weil es Spaß macht, sondern weil ich lerne, wie man mit KI effizient und kreativ arbeitet. <br/> <br/>Wenn ich nicht vor dem Laptop sitze, findest du mich auf dem Volleyballfeld oder im Gym. Dort trainiere ich Teamgeist, Disziplin und Durchhaltevermögen – genau die Skills, die auch im Beruf zählen.</>,
    features: [
      
    ],
  },
  {
    imageSrc: "/images/card-ace-spades.png",
    imageAlt: "Pik Ass",
    title: "Mein Toolkit",
    subtitle: "Technisch - Sprachlich - Soft",
    description:
      "",
    features: [
      "Python - Grundlagen, erste Schritte in der Datenanalyse",
      "KI Tools - Kimi K., Gemini, DeepSeek (inkl. Bildgenerierung)",
      "Office - Word, PowerPoint und Excel",
    <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
   <span style={{ color: "#00ff40" }}>Deutsch - Muttersprache</span> 
</p>,
<p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
   <span style={{ color: "#00ff40b0" }}>Englisch - C1 </span> 
</p>,
<p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
   <span style={{ color: "#b3ff00" }}>Polnisch - B2 Niveau</span> 
</p>,
"Analytisches & strukturiertes Denken",
"Kommunikation & Kundenorientierung",
"Stressresistenz & Belastbarkeit",
"Teamfähigkeit",
    ],
  },
  {
    imageSrc: "/images/card-queen-hearts.png",
    imageAlt: "Herz Dame",
    title: "Mein Weg",
    subtitle: "Ausbildung und Erfahurng",
    description:
    <>2024 das Abitur mit Schwerpunkt Physik absolviert und jetzt studiere ich B.Sc. Mathematik an der Uni Hamburg.<br/><br/>Ein Jahr Gastro - Stressresistenz war hier das A und O. Viele Aufgaben, schwierige Gäste – trotzdem stets sorgfältig und professionell. Meine Belastbarkeit und kommunikativen Fähigkeiten habe ich hier deutlich weiterentwickelt.<br/><br/>Drei + Jahre Einzelhandel - Kundenkontakt, Warenlogistik und Kassenführung. Viel Geduld und Eigeninitiative.
<br/><br/>Sommer bei ruf - Als Serviceteamer fällt hier alles an. Reparatur-, Aufbau- und Abbauarbeiten. Teamwork, Eigeninitiative und ein sicherer Umgang mit Menschen.</>,
    features: [
      
    ],
  },
  {
    imageSrc: "/images/card-jack-diamonds.png",
    imageAlt: "Karo Bube",
    title: "Was ich suche",
    subtitle: "Das Greifen nach den Sternen",
    description:
      <>Ich suche aktuell ein Praktikum – am liebsten in einem Bereich, in dem ich mein analytisches Denken mit Technologie und KI verbinden kann. Data Science, Business Intelligence, IT-Beratung oder ein tech-affiner Bereich – ich bin offen, lernbereit und will mitanpacken.<br/><br/>Was du von mir bekommst: Einen Studenten, der nicht nur theoretisch denkt, sondern auch anpackt. Der mit KI-Tools umgehen kann und versteht, wie man komplexe Aufgaben strukturiert. Der Stressresistenz aus der Servicebranche mitbringt und gleichzeitig frischen Wind in dein Team bringt.</>,
    features: [
      
    ],
  },
  {
    imageSrc: "/images/card-joker.png",
    imageAlt: "JOKER",
    title: "Kontakt",
    subtitle: "Wie man mich erreicht",
    description:
      <>Telefon: +49 1525 6127453<br/><br/>Email: philistryczek@gmail.com<br/><br/>Mein Lebenslauf:<a 
  href="/images/Lebenslauf Philip.pdf" 
  download="Lebenslauf Philip.pdf"
  className="cv-download"
>
  📄 Lebenslauf herunterladen
</a></>,
    features: [
      
    ],
  },
];

export default function Home() {
  return (
    <main className="w-full" style={{ backgroundColor: "#000000" }}>
      <Hero />

      {/* Section divider */}
      <div className="w-full flex justify-center" style={{ backgroundColor: "#000000" }}>
        <div
          className="w-px h-24"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(180, 0, 40, 0.4), transparent)",
          }}
        />
      </div>

      {cardSections.map((section, index) => (
        <PlayingCardSection
          key={index}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
          features={section.features}
          reverse={index % 2 !== 0}
          rotation={index % 2 === 0 ? -6 : 6}
        />
      ))}

      {/* Footer with Legal Link */}
      <footer
        className="w-full py-12 flex flex-col items-center gap-6"
        style={{
          backgroundColor: "#000000",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "rgba(255, 255, 255, 0.15)" }}
        >
          :)
        </p>

        {/* Divider */}
        <div
          className="w-8 h-[1px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
        />

        {/* Legal Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/legal"
            className="text-xs tracking-[0.2em] uppercase hover:opacity-100 transition-opacity"
            style={{ color: "rgba(255, 255, 255, 0.3)" }}
          >
            Impressum
          </Link>
          <span style={{ color: "rgba(255, 255, 255, 0.1)" }}>|</span>
          <Link
            to="/legal"
            className="text-xs tracking-[0.2em] uppercase hover:opacity-100 transition-opacity"
            style={{ color: "rgba(255, 255, 255, 0.3)" }}
          >
            Datenschutz
          </Link>
        </div>
      </footer>
    </main>
  );
}
