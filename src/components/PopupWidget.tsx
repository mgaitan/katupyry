"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Disclosure,
  Transition,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";

export function PopupWidget() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Alguien" });

  const onSubmit = async (data: any, e: any) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        const json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch(() => {
        setIsSuccess(false);
        setMessage("Error de cliente. Revisar consola para mas informacion.");
      });
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton className="fixed z-40 flex items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease">
              <span className="sr-only">Abrir formulario de contacto</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-6 h-6 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white"
                as={"div"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Transition>
            </DisclosureButton>
            <Transition
              className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
              as="div"
            >
              <DisclosurePanel className="flex flex-col overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                <div className="flex flex-col items-center justify-center h-32 p-5 bg-indigo-600">
                  <h3 className="text-lg text-white">Como podemos ayudarte?</h3>
                  <p className="text-white opacity-50">Habitualmente respondemos en unas horas</p>
                </div>
                <div className="flex-grow h-full p-6 overflow-auto bg-gray-50 ">
                  {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      <input
                        type="hidden"
                        value="7ea60748-156a-4d2a-b438-19b30d7246e5"
                        {...register("apikey")}
                      />
                      <input
                        type="hidden"
                        value={`${userName} envio un mensaje desde Katupyry`}
                        {...register("subject")}
                      />
                      <input type="hidden" value="Katupyry.ai" {...register("from_name")} />
                      <input
                        type="checkbox"
                        className="hidden"
                        style={{ display: "none" }}
                        {...register("botcheck")}
                      ></input>

                      <div className="mb-4">
                        <label htmlFor="full_name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          placeholder="Lionel Messi"
                          {...register("name", {
                            required: "Tu nombre completo es requerido",
                            maxLength: 80,
                          })}
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                            errors.name
                              ? "border-red-600 focus:border-red-600 ring-red-100"
                              : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                          }`}
                        />
                        {errors.name && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">{errors.name.message as string}</div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                          Direccion de correo electronico
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Ingresa tu email",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Por favor ingresa un email valido",
                            },
                          })}
                          placeholder="tu@empresa.com"
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                            errors.email
                              ? "border-red-600 focus:border-red-600 ring-red-100"
                              : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                          }`}
                        />

                        {errors.email && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">{errors.email.message as string}</div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                          Tu mensaje
                        </label>

                        <textarea
                          rows={4}
                          id="message"
                          {...register("message", {
                            required: "Ingresa tu mensaje",
                          })}
                          placeholder="Hola, busco una solucion IA que priorice a las personas..."
                          className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring   ${
                            errors.message
                              ? "border-red-600 focus:border-red-600 ring-red-100"
                              : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                          }`}
                          required
                        ></textarea>
                        {errors.message && (
                          <div className="mt-1 text-sm text-red-400 invalid-feedback">{errors.message.message as string}</div>
                        )}
                      </div>
                      <div className="mb-3">
                        <button
                          type="submit"
                          className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                        >
                          {isSubmitting ? (
                            <svg
                              className="w-5 h-5 mx-auto text-white animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          ) : (
                            "Enviar mensaje"
                          )}
                        </button>
                      </div>
                    </form>
                  )}

                  {isSubmitSuccessful && isSuccess && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                      <svg
                        width="60"
                        height="60"
                        className="text-green-300"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.6666 50L42.5 65.8333L74.1666 34.1667"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h3 className="py-5 text-2xl text-green-500">Mensaje enviado</h3>
                      <p className="text-gray-700">{message || "Gracias por contactarte."}</p>
                    </div>
                  )}

                  {isSubmitSuccessful && !isSuccess && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                      <svg
                        width="60"
                        height="60"
                        className="text-red-300"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M50 33.3333V50M50 66.6667H50.0417M91.6667 50C91.6667 73.0119 73.0119 91.6667 50 91.6667C26.9881 91.6667 8.33334 73.0119 8.33334 50C8.33334 26.9881 26.9881 8.33333 50 8.33333C73.0119 8.33333 91.6667 26.9881 91.6667 50Z"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h3 className="py-5 text-2xl text-red-500">No se pudo enviar</h3>
                      <p className="text-gray-700">{message || "Intenta nuevamente en unos minutos."}</p>
                    </div>
                  )}
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
