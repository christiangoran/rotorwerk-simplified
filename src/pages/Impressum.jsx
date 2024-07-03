import { useContext } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useLanguage } from "../context/LanguageContext";
import rwAgb from "../assets/rw_agb.pdf";
import key from "../assets/rw_publickey.txt";

const contactDetails = {
  de: [
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
  ],
  en: [
    {
      title: "Phone:",
      data: "+ 49 (0)38203 4281-40",
      icon: PhoneIcon,
    },
    {
      title: "Fax:",
      data: "+ 49 (0)38203 4281-41",
      icon: PhoneIcon,
    },
    {
      title: "Email:",
      data: "info@rotorwerk.de",
      icon: EnvelopeIcon,
    },
  ],
};

const content = {
  de: {
    introTitle: "Impressum",
    mainTitle:
      "Umfassende Informationen und rechtliche Anforderungen an das Rotorwerk.",
    responsible: "Verantwortlich: ",
    director: "Norbert Schulz",
    companyName: "Rotorwerk Ingenieurdienstleistungen GmbH",
    address: "Kiebitzweg 1, 18211 Börgerende-Rethwisch OT Rethwisch, Germany",
    companyData: "Unternehmensdaten",
    taxNumber: "StNr: 079 / 117 / 02139",
    vatId: "UStID: DE 814 434 550",
    registry: "HRB: 10143 (Amtsgericht Rostock)",
    terms: "Allgemeine Geschäftsbedingungen (AGB)",
    termsDownload: "hier zum Download",
    communicationSecurity: "Für die Kommunikationssicherheit",
    publicKey: "öffentliche Schlüssel",
    fingerprint:
      "Fingerprint: D43B 3404 7738 4039 3DA2 2AD0 E2DD 1F35 A01A 5C4B",
    communicationSupport: "Betreuung Unternehmenskommunikation",
    designer: "Christian Göran, Digital Design",
    privacy: "Datenschutz",
    privacyContent: [
      "Beim Besuch dieser Website werden Daten vom Webserver für die Übertragung von Daten erhoben und zum Teil in Protokolldateien (Log-Files) gespeichert. Im Log-File unseres Webservers werden bei Besuch unserer Webseite anonymisierte Daten gespeichert, die Auskunft über das genutzte Endgerät des Besuchers, den verwendeten Browser, den Zeitpunkt des Zugriffs, den sog. Referer und die übertragenen Datenmengen geben. Ein Personenbezug ist aus diesen Daten allerdings nicht herstellbar. Auf dieser Seite werden keine Cookies verwendet.",
      "Wir verwenden die übertragenen, personenbezogenen Daten (z.B. Name, Kontaktdaten, Anfragen und Kommentare usw.) gemäß den Bestimmungen des deutschen Datenschutzrechts. Der Webserver speichert außerdem Ihre IP-Adresse, mit der zumindest theoretisch ein Personenbezug hergestellt werden kann. Wir erheben, speichern und verarbeiten ausschließlich die durch den Nutzer im Rahmen seiner Angaben in dem Formular zur Verfügung gestellten Daten und erstellen keinerlei Nutzerverhaltensprofile.",
      "Bei Sendung einer E-Mail an uns wird Ihre E-Mail-Adresse ausschließlich für die Korrespondenz mit Ihnen verwendet. Die mit Ihnen geführte Korrespondenz wird automatisch gespeichert. Eine Weitergabe an Dritte oder ein Zugriff von dritter Seite auf diese Daten ist ausgeschlossen. Sollten Sie eine solche Speicherung der mit uns geführten Korrespondenz nicht wünschen, so steht Ihnen jederzeit das Recht zu, der Speicherung zu widersprechen. Der Widerruf ist unter der E-Mail-Adresse info@rotorwerk.de oder unter der im Impressum genannten Postanschrift möglich.",
      "Wir verwenden innerhalb dieses Onlineangebotes auch eingebundene Inhalte Dritter, wie z.B. Kartenmaterial von Google-Maps, Videos, RSS-Feeds, Grafiken o.ä. Es ist davon auszugehen, dass die Anbieter dieser Inhalte die IP-Adresse der Nutzer wahrnehmen. Ohne diese IP-Adresse können sie die Inhalte nicht an den Browser der jeweiligen Nutzer senden. Wir haben keinen Einfluss darauf, dass die Drittanbieter die IP-Adresse z.B. für statistische Zwecke speichern. Das Google Maps API wird verwendet, um geographische Informationen visuell darzustellen. Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Kartenfunktionen durch Besucher erhoben, verarbeitet und genutzt. Weitere und detaillierter Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen",
      "Personenbezogene Daten speichern wir gemäß den Grundsätzen der Datenvermeidung und Datensparsamkeit nur so lange, wie es erforderlich ist oder vom Gesetzgeber her vorgeschrieben wird (vielfältige gesetzliche Speicherfristen). Entfällt der Zweck der erhobenen Informationen oder endet die Speicherfrist, sperren oder löschen wir die Daten.",
      "Sie haben das Recht, auf Antrag jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Weiterhin haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, auf Löschung Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu an unseren Datenschutzbeauftragten unter der Adresse info@rotorwerk.de oder unter der im Impressum genannten Postanschrift. Damit eine Sperre von Daten jederzeit berücksichtigt werden kann, ist es erforderlich, die Daten für Kontrollzwecke in einer Sperrdatei vorzuhalten. Soweit keine gesetzliche Archivierungsverpflichtung besteht, können Sie auch die Löschung der Daten verlangen. Besteht anderfalls eine solche Verpflichtung, sperren wir auf Wunsch Ihre Daten.",
      "Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Die neue Datenschutzerklärung gilt dann für Ihren erneuten Besuch.",
    ],
  },
  en: {
    introTitle: "Imprint",
    mainTitle:
      "Comprehensive information and legal requirements for Rotorwerk.",
    responsible: "Responsible: ",
    director: "Norbert Schulz",
    companyName: "Rotorwerk Engineering Services GmbH",
    address: "Kiebitzweg 1, 18211 Börgerende-Rethwisch OT Rethwisch, Germany",
    companyData: "Company Data",
    taxNumber: "Tax No: 079 / 117 / 02139",
    vatId: "VAT ID: DE 814 434 550",
    registry: "Commercial Register: HRB 10143 (District Court Rostock)",
    terms: "General Terms and Conditions (AGB)",
    termsDownload: "here for download",
    communicationSecurity: "For Communication Security",
    publicKey: "public key",
    fingerprint:
      "Fingerprint: D43B 3404 7738 4039 3DA2 2AD0 E2DD 1F35 A01A 5C4B",
    communicationSupport: "Corporate Communications Support",
    designer: "Christian Göran, Digital Design",
    privacy: "Privacy",
    privacyContent: [
      "When visiting this website, data is collected by the web server for data transmission and partly stored in log files. In the log file of our web server, anonymized data is stored during the visit to our website, which provides information about the visitor's device, the browser used, the time of access, the referrer, and the transmitted data volumes. However, a personal reference cannot be established from this data. No cookies are used on this site.",
      "We use the transmitted personal data (e.g., name, contact details, inquiries, and comments, etc.) in accordance with the provisions of German data protection law. The web server also stores your IP address, which theoretically allows for a personal reference. We collect, store, and process exclusively the data provided by the user as part of their information in the form and do not create any user behavior profiles.",
      "When sending an email to us, your email address is used exclusively for correspondence with you. The correspondence with you is automatically saved. No transfer to third parties or access by third parties to this data is allowed. If you do not wish for this correspondence with us to be saved, you have the right to object to the storage at any time. The revocation is possible at the email address info@rotorwerk.de or at the postal address mentioned in the imprint.",
      "We also use integrated third-party content within this online offer, such as map material from Google-Maps, videos, RSS feeds, graphics, etc. It is to be assumed that the providers of these contents perceive the IP address of the users. Without this IP address, they cannot send the content to the browsers of the respective users. We have no influence on whether the third-party providers store the IP address, e.g., for statistical purposes. The Google Maps API is used to visually display geographical information. When using Google Maps, Google also collects, processes, and uses data about the use of the map functions by visitors. Further and more detailed information about data processing by Google can be found in the Google privacy policy.",
      "We store personal data in accordance with the principles of data avoidance and data minimization only as long as it is necessary or required by law (various legal retention periods). If the purpose of the collected information ceases or the storage period ends, we block or delete the data.",
      "You have the right to request information about your stored personal data at any time. Furthermore, you have the right to correction, blocking, or, apart from the mandatory data storage for business processing, deletion of your personal data. Please contact our data protection officer at the address info@rotorwerk.de or at the postal address mentioned in the imprint. To ensure that data can be considered at any time, it is necessary to keep the data in a lock file for control purposes. If there is no legal archiving obligation, you can also request the deletion of the data. Otherwise, we will block your data upon request.",
      "We reserve the right to adjust this privacy policy at any time to ensure that it always complies with the current legal requirements or to implement changes in our services in the privacy policy. The new privacy policy will then apply to your renewed visit.",
    ],
  },
};
export default function Impressum() {
  const { language } = useLanguage();
  const langContent = content[language];
  const langContactDetails = contactDetails[language];

  return (
    <div className="relative px-6 py-24 overflow-hidden text-left isolate sm:py-32 lg:overflow-visible lg:px-0">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-base font-semibold leading-7 text-yellow-600"
          id="features"
        >
          {langContent.introTitle}
        </h1>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {langContent.mainTitle}
        </p>
      </div>
      <div className="relative px-6 py-8 overflow-hidden text-left isolate sm:py-8 lg:overflow-visible lg:px-0">
        <div className="max-w-3xl mx-auto">
          <p className="mt-6">
            {langContent.responsible} <b>{langContent.director}</b>,
            Geschäftsführer
          </p>
          <p className="mt-6">
            {langContent.companyName}
            <br></br>
            {langContent.address}
          </p>
          <ul role="list" className="mt-8 space-y-4 text-gray-600">
            {langContactDetails.map((detail, index) => (
              <li key={index} className="flex gap-x-3">
                <detail.icon className="w-6 h-6 text-lime-900" />
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

        <div className="max-w-3xl mx-auto">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {langContent.companyData}
          </h2>
          <p className="mt-3">{langContent.taxNumber}</p>
          <p className="mt-3">{langContent.vatId}</p>
          <p className="mt-3">{langContent.registry}</p>
          <p className="mt-6">
            <b>{langContent.terms}</b>
            <br></br>
            Unsere allgemeinen Geschäftsbedingungen (AGB's) stehen link{" "}
            <a href={rwAgb} download="rw_agb.pdf" className="text-yellow-600">
              {langContent.termsDownload}
            </a>{" "}
            (PDF).
          </p>
          <p className="mt-6">
            <b>{langContent.communicationSecurity}</b>
            <br></br>
            Hier der{" "}
            <a
              href={key}
              download="rw_publickey.txt"
              className="text-yellow-600"
            >
              {langContent.publicKey}
            </a>{" "}
            zum Verifizieren von Dokumenten
          </p>
          <p className="mt-3">{langContent.fingerprint}</p>
          <p className="mt-6">
            <b>{langContent.communicationSupport}</b>
            <br></br>
            {langContent.designer}{" "}
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

        <div className="max-w-3xl mx-auto">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {langContent.privacy}
          </h2>
          {langContent.privacyContent.map((paragraph, index) => (
            <p key={index} className="mt-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
