import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import useStore from "../stores/userStore";
import { API_URL } from "../config";
import Router from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function DropMenuItem(props){
  return(
    <>
      <Menu.Item>
        {({ active }) => (
          <props.tag
            onClick={props.onClick}
            href={props.href}
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm rounded-xl"
            )}
          >
            {props.children}
          </props.tag>
        )}
      </Menu.Item>
    </>
  )
}

export default function DropMenu(props) {
  const logout = useStore((state) => state.logout);

  async function Logout(event) {
    const response = await fetch(`${API_URL}/api/account/logout/`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
    });

    if (response.ok) {
      console.log("logged out");
      logout();
      Router.push("/login");
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center rounded-2xl border-gray-300 shadow-sm p-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100 focus-visible:ring-primary">
          {props.icon}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none focus-visible:ring-2 ">
          <div className="p-4">
            {props.children}
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm rounded-xl"
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={Logout}
                  type="submit"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm rounded-xl"
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}