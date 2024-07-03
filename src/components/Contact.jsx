import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useLanguage } from "../context/LanguageContext";

const contactContent = {
  de: {
    title: "Interessiert?",
    description:
      "Teilen Sie uns Ihr Anliegen mit und wir werden uns bei Ihnen melden.",
    form: {
      firstName: "Vorname",
      lastName: "Nachname",
      email: "Email",
      phoneNumber: "Telefonnummer",
      message: "Nachricht",
      agreeToPolicies:
        "Durch die Auswahl dieser Option erklären Sie sich mit unserer",
      privacyPolicy: "Datenschutzbestimmungen",
      submitButton: "Lass uns reden",
    },
  },
  en: {
    title: "Interested?",
    description: "Let us know your concern and we will get back to you.",
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phoneNumber: "Phone Number",
      message: "Message",
      agreeToPolicies: "By selecting this option, you agree to our",
      privacyPolicy: "privacy policy",
      submitButton: "Let's Talk",
    },
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const { language } = useLanguage(); // Hämta språk från kontexten
  const content = contactContent[language]; // Välj innehåll baserat på språk

  const [agreed, setAgreed] = useState(false);

  return (
    <div className="px-6 py-24 bg-white isolate sm:py-32 lg:px-8" id="contact">
      <div className="max-w-2xl mx-auto text-left sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {content.description}
        </p>
      </div>

      <form
        action="#"
        method="POST"
        className="max-w-xl mx-auto mt-16 sm:mt-10"
      >
        <div className="grid grid-cols-1 text-left gap-x-8 gap-y-6 sm:grid-cols-2 sm:text-center">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {content.form.firstName}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {content.form.lastName}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-2.5">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {content.form.email}
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-2.5">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {content.form.phoneNumber}
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {content.form.message}
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-900 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex items-center h-6">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-lime-900" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-900"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              {content.form.agreeToPolicies}{" "}
              <a href="#" className="font-semibold text-lime-950">
                {content.form.privacyPolicy}
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-lime-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-800"
          >
            {content.form.submitButton}
          </button>
        </div>
      </form>
    </div>
  );
}
