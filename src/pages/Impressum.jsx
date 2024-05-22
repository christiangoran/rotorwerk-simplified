import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import rwAgb from "../assets/rw_agb.pdf";
import key from "../assets/rw_publickey.txt";

const contactDetails = [
  {
    title: "tel:",
    data: "+ 49 (0)38203 4281-40",
    icon: PhoneIcon,
  },
  {
    title: "fax:",
    data: "+ 49 (0)38203 4281-41",
    icon: PhoneIcon,
  },
  {
    title: "email:",
    data: "info@rotorwerk.de",
    icon: EnvelopeIcon,
  },
];

export default function Impressum() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 text-left">
      <div className=" max-w-3xl mx-auto">
        <h1
          className="text-yellow-600 text-base leading-7 font-semibold"
          id="features"
        >
          Impressum
        </h1>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Umfassende Informationen und rechtliche Anforderungen an das
          Rotorwerk.
        </p>
      </div>
      <div className="relative isolate overflow-hidden px-6 py-8 sm:py-8 lg:overflow-visible lg:px-0 text-left">
        <div className=" max-w-3xl mx-auto">
          <p className="mt-6">
            Verantwortlich: <b>Norbert Schulz</b>, Geschäftsführer
          </p>
          <p className="mt-6">
            Rotorwerk Ingenieurdienstleistungen GmbH
            <br></br>
            Kiebitzweg 1<br></br>
            18211 Börgerende-Rethwisch OT Rethwisch, Germany
          </p>
          <ul role="list" className="mt-8 space-y-4 text-gray-600">
            {contactDetails.map((detail, index) => (
              <li key={index} className="flex gap-x-3">
                <detail.icon className="h-6 w-6 text-lime-900" />
                <span>
                  <strong className="font-semibold text-gray-900">
                    {detail.title}
                  </strong>{" "}
                  {detail.data}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className=" max-w-3xl mx-auto">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Unternehmensdaten
          </h2>
          <p className="mt-3">StNr: 079 / 117 / 02139</p>
          <p className="mt-3">UStID: DE 814 434 550</p>
          <p className="mt-3">HRB: 10143 (Amtsgericht Rostock)</p>
          <p className="mt-6">
            <b>Allgemeine Geschäftsbedingungen (AGB)</b>
            <br></br>
            Unsere allgemeinen Geschäftsbedingungen (AGB's) stehen link{" "}
            <a href={rwAgb} download="rw_agb.pdf" className="text-yellow-600">
              hier zum{" "}
            </a>
            Download für Sie bereit (PDF).
          </p>
          <p className="mt-6">
            <b>Für die Kommunikationssicherheit</b>
            <br></br>
            Hier der{" "}
            <a
              href={key}
              download="rw_publickey.txt"
              className="text-yellow-600"
            >
              öffentliche Schlüssel{" "}
            </a>
            zum Verifizieren von Dokumenten
          </p>
          <p className="mt-3">
            Fingerprint: D43B 3404 7738 4039 3DA2 2AD0 E2DD 1F35 A01A 5C4B
          </p>
          <p className="mt-6">
            <b>Betreuung Unternehmenskommunikation</b>
            <br></br>
            Christian Göran, Digital Design{" "}
            <a
              href="https://www.cgoran.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600"
            >
              www.cgoran.com
            </a>
          </p>
        </div>

        <div className=" max-w-3xl mx-auto">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Datenschutz
          </h2>
          <p className="mt-6">
            Beim Besuch dieser Website werden Daten vom Webserver für die
            Übertragung von Daten erhoben und zum Teil in Protokolldateien
            (Log-Files) gespeichert. Im Log-File unseres Webservers werden bei
            Besuch unserer Webseite anonymisierte Daten gespeichert, die
            Auskunft über das genutzte Endgerät des Besuchers, den verwendeten
            Browser, den Zeitpunkt des Zugriffs, den sog. Referer und die
            übertragenen Datenmengen geben. Ein Personenbezug ist aus diesen
            Daten allerdings nicht herstellbar. Auf dieser Seite werden keine
            Cookies verwendet.
          </p>
          <p className="mt-6">
            Wir verwenden die übertragenen, personenbezogenen Daten (z.B. Name,
            Kontaktdaten, Anfragen und Kommentare usw.) gemäß den Bestimmungen
            des deutschen Datenschutzrechts. Der Webserver speichert außerdem
            Ihre IP-Adresse, mit der zumindest theoretisch ein Personenbezug
            hergestellt werden kann. Wir erheben, speichern und verarbeiten
            ausschließlich die durch den Nutzer im Rahmen seiner Angaben in dem
            Formular zur Verfügung gestellten Daten und erstellen keinerlei
            Nutzerverhaltensprofile.
          </p>
          <p className="mt-6">
            Bei Sendung einer E-Mail an uns wird Ihre E-Mail-Adresse
            ausschließlich für die Korrespondenz mit Ihnen verwendet. Die mit
            Ihnen geführte Korrespondenz wird automatisch gespeichert. Eine
            Weitergabe an Dritte oder ein Zugriff von dritter Seite auf diese
            Daten ist ausgeschlossen. Sollten Sie eine solche Speicherung der
            mit uns geführten Korrespondenz nicht wünschen, so steht Ihnen
            jederzeit das Recht zu, der Speicherung zu widersprechen. Der
            Widerruf ist unter der E-Mail-Adresse info@rotorwerk.de oder unter
            der im Impressum genannten Postanschrift möglich.
          </p>
          <p className="mt-6">
            Wir verwenden innerhalb dieses Onlineangebotes auch eingebundene
            Inhalte Dritter, wie z.B. Kartenmaterial von Google-Maps, Videos,
            RSS-Feeds, Grafiken o.ä. Es ist davon auszugehen, dass die Anbieter
            dieser Inhalte die IP-Adresse der Nutzer wahrnehmen. Ohne diese
            IP-Adresse können sie die Inhalte nicht an den Browser der
            jeweiligen Nutzer senden. Wir haben keinen Einfluss darauf, dass die
            Drittanbieter die IP-Adresse z.B. für statistische Zwecke speichern.
            Das Google Maps API wird verwendet, um geographische Informationen
            visuell darzustellen. Bei der Nutzung von Google Maps werden von
            Google auch Daten über die Nutzung der Kartenfunktionen durch
            Besucher erhoben, verarbeitet und genutzt. Weitere und detaillierter
            Informationen über die Datenverarbeitung durch Google können Sie den
            Google-Datenschutzhinweisen{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600"
            >
              ( https://policies.google.com/privacy )
            </a>
            entnehmen.
          </p>
          <p className="mt-6">
            Personenbezogene Daten speichern wir gemäß den Grundsätzen der
            Datenvermeidung und Datensparsamkeit nur so lange, wie es
            erforderlich ist oder vom Gesetzgeber her vorgeschrieben wird
            (vielfältige gesetzliche Speicherfristen). Entfällt der Zweck der
            erhobenen Informationen oder endet die Speicherfrist, sperren oder
            löschen wir die Daten.
          </p>
          <p className="mt-6">
            Sie haben das Recht, auf Antrag jederzeit Auskunft über Ihre bei uns
            gespeicherten personenbezogenen Daten zu erhalten. Weiterhin haben
            Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der
            vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, auf
            Löschung Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu
            an unseren Datenschutzbeauftragten unter der Adresse
            info@rotorwerk.de oder unter der im Impressum genannten
            Postanschrift. Damit eine Sperre von Daten jederzeit berücksichtigt
            werden kann, ist es erforderlich, die Daten für Kontrollzwecke in
            einer Sperrdatei vorzuhalten. Soweit keine gesetzliche
            Archivierungsverpflichtung besteht, können Sie auch die Löschung der
            Daten verlangen. Besteht anderfalls eine solche Verpflichtung,
            sperren wir auf Wunsch Ihre Daten.
          </p>
          <p className="mt-6">
            Wir behalten uns vor, diese Datenschutzerklärung jederzeit
            anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
            entspricht oder um Änderungen unserer Leistungen in der
            Datenschutzerklärung umzusetzen. Die neue Datenschutzerklärung gilt
            dann für Ihren erneuten Besuch.
          </p>
        </div>
      </div>
    </div>
  );
}
