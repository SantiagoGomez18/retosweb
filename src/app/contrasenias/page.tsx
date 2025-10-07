'use client';
import React, { useState, useEffect } from "react";

export default function ContraseñasPage() {
    const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(15);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [errors, setErrors] = useState({});


  const generatePassword = () => {
    setErrors({});
    if (!uppercase && !lowercase && !numbers && !symbols) {
      return setErrors("sdfsfsd");
    } else if (passwordLength === "0") {
      return setErrors("Password length cannot be 0");
    } else if (passwordLength === "") {
      return setErrors("Invalid password length");
    } else if (passwordLength >= 30) {
      setPassword("");
      return setErrors("Password length cannot exceed 30 characters");
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const choice = random(0, 3);
      if (lowercase && choice === 0) {
        password += randomLower();
      } else if (uppercase && choice === 1) {
        password += randomUpper();
      } else if (symbols && choice === 2) {
        password += randomSymbol();
      } else if (numbers && choice === 3) {
        password += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(password);
  };

    const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomLower = () => {
    return String.fromCharCode(random(97, 122));
    };

    const randomUpper = () => {
    return String.fromCharCode(random(65, 90));
    };

    const randomSymbol = () => {
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    return symbols[random(0, symbols.length - 1)];
    };

useEffect(() => {
    generatePassword();
}, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Generador de Contraseñas</h1>
            <div>
                Generador de contraseñas aleatorias con opciones personalizables.
            </div>
            <div className="mt-4">
                <p className="text-lg font-semibold">Contraseña generada:</p>
                <input
                    type="text"
                    value={password}
                    readOnly
                    className="border border-gray-300 p-2 rounded-md w-full"
                />
            </div>
            <button
                onClick={generatePassword}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Generar Contraseña
            </button>
        </div>

    );
}