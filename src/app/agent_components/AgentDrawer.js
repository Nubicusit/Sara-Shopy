"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function AgentDrawer({ isOpen, onClose }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-50"
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 left-0 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto">
                    <div className="px-4 py-6 bg-gray-50">
                      <h2 className="text-lg font-medium text-gray-900">
                        Menu
                      </h2>
                    </div>
                    <nav className="px-4 py-6">
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-gray-900"
                      >
                        Dashboard
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-gray-900"
                      >
                        Orders
                      </a>
                      <a
                        href="#"
                        className="block py-2 text-gray-700 hover:text-gray-900"
                      >
                        Settings
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
