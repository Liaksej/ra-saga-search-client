"use client";

import { store } from "@/redux/store";
import { changeSearchField } from "@/redux/sagas/sataActions";
import { useRef } from "react";
import CloseIcon from "@material-ui/icons/Close";

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);

  function clearHandler() {
    if (inputRef.current) {
      inputRef.current.value = "";
      store.dispatch(changeSearchField(inputRef.current.value));
    }
  }

  return (
    <div className="relative">
      <input
        ref={inputRef}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(e) => store.dispatch(changeSearchField(e.target.value))}
        placeholder="Search..."
      />
      <CloseIcon
        className="absolute right-2 top-[0.7rem] rounded-full dark:invert cursor-pointer text-gray-400"
        onClick={() => clearHandler()}
        fontSize="small"
      />
    </div>
  );
}
