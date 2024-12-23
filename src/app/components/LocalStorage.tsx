"use client";

import { useState, ChangeEvent, useEffect } from "react";

const useLocalStorageState = (key: string, defaultValue = "") => {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || defaultValue
  );

  useEffect(() => window.localStorage.setItem(key, state), [key, state]);

  return [state, setState];
};

export default function LocalStorage() {
  const [name, setName] = useLocalStorageState("name");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setName(event.target.value);
    }
  };

  return (
    <form>
      <label htmlFor="test" className="block w-fit mb-2">
        Local Storage
      </label>
      <input
        id="test"
        type="text"
        value={name}
        onChange={handleChange}
        className="p-3 rounded-xl border-2"
      />
    </form>
  );
}
