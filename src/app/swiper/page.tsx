import { CurrentResourceProvider } from "@/components/CurrentResourceProvider";
import PageSwiper from "@/components/PageSwiper";

export default function Page() {
  return (
    <CurrentResourceProvider>
        <div className="w-full h-screen">
        <PageSwiper />
        </div>
    </CurrentResourceProvider>
  );
}