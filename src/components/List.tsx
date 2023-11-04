"use client";

import { useSelector } from "react-redux";
import { selectSearchResult } from "@/redux/search/selectors";
import { SearchItemState } from "@/redux/search/sliceStateTypes";

export default function List() {
  const listData = useSelector((state) => selectSearchResult(state));
  if (listData.loading) {
    return <p className="prose dark:prose-invert pl-2">Loading...</p>;
  }

  if (listData.error) {
    return (
      <p className="prose dark:prose-invert pl-2">{listData.error.message}</p>
    );
  }
  if (listData.data.length === 0) {
    return (
      <p className="prose dark:prose-invert pl-2">
        Type something to search...
      </p>
    );
  }

  return (
    <ul className="prose dark:prose-invert pt-4">
      {listData.data.map((item: SearchItemState, index: number) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}
