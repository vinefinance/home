import "./Roadmap.css";
import likebite from "../../assets/images/likebite.png";
import { CheckIcon } from "@heroicons/react/solid";

const steps = [
  {
    name: "Create account",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    name: "Profile information",
    description: "Cursus semper viverra facilisis et et some more.",
    href: "#",
    status: "current",
  },
  {
    name: "Business information",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "Theme",
    description: "Faucibus nec enim leo et.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "SOLD OUT",
    description: "Iusto et officia maiores porro ad non quas.",
    href: "#",
    status: "upcoming",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Roadmap() {
  return (
    <div className="relative  overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className=" sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="mb-8 mx-auto max-w-md text-center  sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                  <h2 className="mt-2 pb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-indigo-600">
                    Roadmap
                  </h2>
                </div>

                <nav aria-label="Progress">
                  <ol role="list" className="overflow-hidden">
                    {steps.map((step, stepIdx) => (
                      <li
                        key={step.name}
                        className={classNames(
                          stepIdx !== steps.length - 1 ? "pb-10" : "",
                          "relative"
                        )}
                      >
                        {step.status === "complete" ? (
                          <>
                            {stepIdx !== steps.length - 1 ? (
                              <div
                                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600"
                                aria-hidden="true"
                              />
                            ) : null}
                            <a
                              href={step.href}
                              className="relative flex items-start group"
                            >
                              <span className="h-9 flex items-center">
                                <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                                  <CheckIcon
                                    className="w-5 h-5 text-white"
                                    aria-hidden="true"
                                  />
                                </span>
                              </span>
                              <span className="ml-4 min-w-0 flex flex-col">
                                <span className="text-xs font-semibold tracking-wide uppercase">
                                  {step.name}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {step.description}
                                </span>
                              </span>
                            </a>
                          </>
                        ) : step.status === "current" ? (
                          <>
                            {stepIdx !== steps.length - 1 ? (
                              <div
                                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                aria-hidden="true"
                              />
                            ) : null}
                            <a
                              href={step.href}
                              className="relative flex items-start group"
                              aria-current="step"
                            >
                              <span
                                className="h-9 flex items-center"
                                aria-hidden="true"
                              >
                                <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                                  <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                                </span>
                              </span>
                              <span className="ml-4 min-w-0 flex flex-col">
                                <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">
                                  {step.name}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {step.description}
                                </span>
                              </span>
                            </a>
                          </>
                        ) : (
                          <>
                            {stepIdx !== steps.length - 1 ? (
                              <div
                                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                aria-hidden="true"
                              />
                            ) : null}
                            <a
                              href={step.href}
                              className="relative flex items-start group"
                            >
                              <span
                                className="h-9 flex items-center"
                                aria-hidden="true"
                              >
                                <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                  <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                                </span>
                              </span>
                              <span className="ml-4 min-w-0 flex flex-col">
                                <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                                  {step.name}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {step.description}
                                </span>
                              </span>
                            </a>
                          </>
                        )}
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <img className="w-full" src={likebite} alt={"likebite"} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
