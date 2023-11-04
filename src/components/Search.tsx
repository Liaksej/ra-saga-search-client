"use client";

import { store } from "@/redux/store";
import { changeSearchField } from "@/redux/sagas/actions";

export default function Search() {
  return (
    <div>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(e) => store.dispatch(changeSearchField(e.target.value))}
      />
    </div>
  );
}
