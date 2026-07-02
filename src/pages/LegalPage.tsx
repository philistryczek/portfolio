import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function LegalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Header */}
      <header className="w-full py-8 px-6 sm:px-8 lg:px-12">
        <motion.div
          className="max-w-4xl mx-auto flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/"
            className="text-sm tracking-[0.3em] uppercase hover:opacity-80 transition-opacity"
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            ← Zurück
          </Link>
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "rgba(200, 50, 50, 0.8)" }}
          >
            
          </span>
        </motion.div>
      </header>

      {/* Content */}
      <main className="w-full px-6 sm:px-8 lg:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center"
            style={{
              color: "#ffffff",
              fontFamily: "'Inter', system-ui, sans-serif",
              letterSpacing: "0.15em",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            RECHTLICHE HINWEISE
          </motion.h1>

          {/* Impressum Section */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div
              className="rounded-lg p-8 sm:p-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <h2
                className="text-xl sm:text-2xl font-semibold mb-6"
                style={{
                  color: "rgba(200, 50, 50, 0.9)",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                Impressum
              </h2>

              <div className="space-y-4">
                <p
                  className="text-sm sm:text-base"
                  style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.8 }}
                >
                  <strong style={{ color: "rgba(255, 255, 255, 0.9)" }}>Angaben gemäß § 5 TMG</strong>
                </p>

                <p
                  className="text-sm sm:text-base"
                  style={{ color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.8 }}
                >
                  Philip Stryczek<br />
                  Haffkamp 1a<br />
                  22958 Kuddewörde<br />
                  Deutschland
                </p>

                <p
                  className="text-sm sm:text-base"
                  style={{ color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.8 }}
                >
                  <strong style={{ color: "rgba(255, 255, 255, 0.9)" }}>Kontakt:</strong><br />
                  E-Mail: philistryczek@gmail.com<br />
                  Telefon: +49 1525 6127453
                </p>

                <p
                  className="text-sm sm:text-base"
                  style={{ color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.8 }}
                >
                  <strong style={{ color: "rgba(255, 255, 255, 0.9)" }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
                  Philip Stryczek
                </p>
              </div>
            </div>
          </motion.section>

          {/* Divider */}
          <div
            className="w-full h-[1px] my-12"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(180, 0, 40, 0.4), transparent)",
            }}
          />

          {/* Datenschutz Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <div
              className="rounded-lg p-8 sm:p-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <h2
                className="text-xl sm:text-2xl font-semibold mb-6"
                style={{
                  color: "rgba(200, 50, 50, 0.9)",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                Datenschutzerklärung
              </h2>

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-sm sm:text-base font-semibold mb-2"
                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                  >
                    1. Verantwortlicher
                  </h3>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "rgba(255, 255, 255, 0.55)", lineHeight: 1.8 }}
                  >
                    Philip Stryczek<br />
                    Haffkamp 1a, 22958 Kuddewörde<br />
                    E-Mail: philistryczek@gmail.com
                  </p>
                </div>

                <div>
                  <h3
                    className="text-sm sm:text-base font-semibold mb-2"
                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                  >
                    2. Allgemeines
                  </h3>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "rgba(255, 255, 255, 0.55)", lineHeight: 1.8 }}
                  >
                    Diese Website dient ausschließlich der persönlichen beruflichen Präsentation.
                    Der Schutz deiner Daten ist mir wichtig. Diese Erklärung informiert darüber,
                    welche Daten erhoben und wie sie verarbeitet werden.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-sm sm:text-base font-semibold mb-2"
                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                  >
                    3. Hosting und Server-Logs
                  </h3>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "rgba(255, 255, 255, 0.55)", lineHeight: 1.8 }}
                  >
                    Diese Website wird gehostet. Beim Aufruf werden automatisch technische Daten erfasst:
                    IP-Adresse, Datum/Uhrzeit, Browsertyp, Betriebssystem, Referrer-URL.
                    Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                  </p>
                </div>

                <div>
                  <h3
                    className="text-sm sm:text-base font-semibold mb-2"
                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                  >
                    4. Keine Cookies / Kein Tracking
                  </h3>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "rgba(255, 255, 255, 0.55)", lineHeight: 1.8 }}
                  >
                    Diese Website verwendet <strong style={{ color: "rgba(255, 255, 255, 0.8)" }}>keine Tracking-Tools</strong>,
                    <strong style={{ color: "rgba(255, 255, 255, 0.8)" }}> keine Cookies</strong> und bindet
                    <strong style={{ color: "rgba(255, 255, 255, 0.8)" }}> keine externen Dienste</strong> ein.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-sm sm:text-base font-semibold mb-2"
                    style={{ color: "rgba(255, 255, 255, 0.85)" }}
                  >
                    5. Deine Rechte
                  </h3>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "rgba(255, 255, 255, 0.55)", lineHeight: 1.8 }}
                  >
                    Du hast das Recht auf: Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
                    Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
                    Widerspruch (Art. 21 DSGVO) und Datenübertragbarkeit (Art. 20 DSGVO).
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="w-full py-8 flex items-center justify-center"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <Link
          to="/"
          className="text-xs tracking-[0.3em] uppercase hover:opacity-80 transition-opacity"
          style={{ color: "rgba(255, 255, 255, 0.25)" }}
        >
          ← ZURÜCK ZUR STARTSEITE
        </Link>
      </footer>
    </div>
  );
}
