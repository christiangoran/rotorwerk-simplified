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

// ----------------MENU ITEMS----------------

const products = [
  {
    name: "Konstruktion",
    description: "Design, analyze, and optimize complex systems.",
    href: "konstruktion",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "FEM",
    description:
      "Our advanced techniques ensure precision and safety in your projects.",
    href: "fem",
    icon: ChartPieIcon,
  },
  {
    name: "WEA-Entwicklung",
    description:
      "We design and optimize components for maximum efficiency and reliability.",
    href: "wea-entwicklung",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Tech. Dokumentation",
    description:
      "We create comprehensive technical documentation to support your engineering processes.",
    href: "documentation",
    icon: DocumentChartBarIcon,
  },
  {
    name: "Zulieferauswahl",
    description:
      "Fatigue analysis services assess the durability and lifespan of mechanical components.",
    href: "zulieferauswahl",
    icon: SquaresPlusIcon,
  },
  {
    name: "Betriebsfestigkeit",
    description:
      "We assist in selecting the best suppliers for your engineering needs",
    href: "betriebsfestigkeit",
    icon: CubeTransparentIcon,
  },
];
const callsToAction = [
  { name: "E-Mail uns", href: "#", icon: InboxArrowDownIcon },
  { name: "Kontakt uns", href: "#", icon: PhoneIcon },
];

// ----------------MENU ITEMS END----------------

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white top-0 relative">
      <nav
        className="z-100 mx-auto flex max-w-7xl items-center justify-between p-0 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">RotorWerk</span>
            <img className="h-16" src={logo} alt="" />
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
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
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-lime-900"
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
                        className="h-5 w-5 flex-none text-gray-400"
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
            Kontakt
          </HashLink>
          <Link
            to="impressum"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Impressum
          </Link>
          <Link
            to="impressum"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Datenschutz
          </Link>
          <a
            href={rwAgb}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            AGB
          </a>
          <Link
            to="english"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            English
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Home</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
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
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Kontakt
                </HashLink>
                <Link
                  to="impressum"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Impressum
                </Link>
                <Link
                  to="datenschutz"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Datenschutz
                </Link>
                <Link
                  to="english"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  English
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
