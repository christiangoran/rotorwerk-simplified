import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  WrenchScrewdriverIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
  DocumentChartBarIcon,
  SquaresPlusIcon,
  CubeTransparentIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/20/solid";
import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import rwAgb from "../assets/rw_agb.pdf";
import { Logo } from "./Logo";
import { useLanguage } from "../context/LanguageContext";

// ----------------MENU ITEMS----------------

const productsContent = {
  de: [
    {
      name: "Konstruktion",
      description: "Entwerfen, analysieren und optimieren komplexer Systeme.",
      href: "konstruktion",
      icon: WrenchScrewdriverIcon,
    },
    {
      name: "FEM",
      description:
        "Unsere fortschrittlichen Techniken gewährleisten Präzision und Sicherheit in Ihren Projekten.",
      href: "fem",
      icon: ChartPieIcon,
    },
    {
      name: "WEA-Entwicklung",
      description:
        "Wir entwerfen und optimieren Komponenten für maximale Effizienz und Zuverlässigkeit.",
      href: "wea-entwicklung",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      name: "Tech. Dokumentation",
      description:
        "Wir erstellen umfassende technische Dokumentationen zur Unterstützung Ihrer Ingenieurprozesse.",
      href: "documentation",
      icon: DocumentChartBarIcon,
    },
    {
      name: "Zulieferauswahl",
      description:
        "Unsere Betriebsfestigkeitsanalyse bewertet die Haltbarkeit und Lebensdauer mechanischer Komponenten.",
      href: "zulieferauswahl",
      icon: SquaresPlusIcon,
    },
    {
      name: "Betriebsfestigkeit",
      description:
        "Wir unterstützen Sie bei der Auswahl der besten Lieferanten für Ihre Ingenieuranforderungen.",
      href: "betriebsfestigkeit",
      icon: CubeTransparentIcon,
    },
  ],
  en: [
    {
      name: "Design",
      description: "Designing, analyzing, and optimizing complex systems.",
      href: "konstruktion",
      icon: WrenchScrewdriverIcon,
    },
    {
      name: "FEA",
      description:
        "Our advanced techniques ensure precision and safety in your projects.",
      href: "fem",
      icon: ChartPieIcon,
    },
    {
      name: "WEA Development",
      description:
        "We design and optimize components for maximum efficiency and reliability.",
      href: "wea-entwicklung",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      name: "Tech. Documentation",
      description:
        "We create comprehensive technical documentation to support your engineering processes.",
      href: "documentation",
      icon: DocumentChartBarIcon,
    },
    {
      name: "Supplier Selection",
      description:
        "Our fatigue strength analysis evaluates the durability and lifespan of mechanical components.",
      href: "zulieferauswahl",
      icon: SquaresPlusIcon,
    },
    {
      name: "Fatigue Strength",
      description:
        "We assist you in selecting the best suppliers for your engineering needs.",
      href: "betriebsfestigkeit",
      icon: CubeTransparentIcon,
    },
  ],
};

const callsToActionContent = {
  de: [
    { name: "E-Mail uns", href: "kontakt", icon: InboxArrowDownIcon },
    { name: "Kontakt uns", href: "tel:+491234567890", icon: PhoneIcon },
  ],
  en: [
    { name: "Email Us", href: "kontakt", icon: InboxArrowDownIcon },
    { name: "Call Us", href: "tel:+491234567890", icon: PhoneIcon },
  ],
};

// ----------------MENU ITEMS END----------------

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const products = productsContent[language];
  const callsToAction = callsToActionContent[language];

  return (
    <header className="relative top-0 bg-white">
      <nav
        className="flex items-center justify-between p-0 mx-auto z-100 max-w-7xl lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/">
            <span className="sr-only">RotorWerk</span>
            <Logo className="h-12 text-lime-950" />
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1">
              {language === "de" ? "Produkt" : "Product"}
              <ChevronDownIcon
                className="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="w-6 h-6 text-gray-600 group-hover:text-lime-900"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={`/${item.href}`}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="flex-none w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <HashLink
            to="#contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {language === "de" ? "Kontakt" : "Contact"}
          </HashLink>
          <Link
            to="impressum"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {language === "de" ? "Impressum" : "Imprint"}
          </Link>
          <Link
            to="impressum"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {language === "de" ? "Datenschutz" : "Privacy Policy"}
          </Link>
          <a
            href={rwAgb}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {language === "de" ? "AGB" : "Terms"}
          </a>
          <button
            onClick={() => changeLanguage(language === "de" ? "en" : "de")}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {language === "de" ? "English" : "Deutsch"}
          </button>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Home</span>
              <img className="w-auto h-8" src={logo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {language === "de" ? "Produkt" : "Product"}
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as={Link}
                            to={`/${item.href}`}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <HashLink
                  to="#contact"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  {language === "de" ? "Kontakt" : "Contact"}
                </HashLink>
                <Link
                  to="impressum"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  {language === "de" ? "Impressum" : "Imprint"}
                </Link>
                <Link
                  to="datenschutz"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  {language === "de" ? "Datenschutz" : "Privacy Policy"}
                </Link>
                <button
                  onClick={() =>
                    changeLanguage(language === "de" ? "en" : "de")
                  }
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  {language === "de" ? "English" : "Deutsch"}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
