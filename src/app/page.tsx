import { StoreProvider } from "@/redux/StoreProvider";
import Search from "@/components/Search";
import List from "@/components/List";

export default function Home() {
  return (
    <div className="md:w-4/5 md:mx-auto pt-20">
      <StoreProvider>
        <Search />
        <List />
      </StoreProvider>
    </div>
  );
}
