import { CurrentResourceProvider } from "@/components/CurrentResourceProvider";

export default function Home() {
  return (
    <CurrentResourceProvider>
      <div>
        <h1>How are you feeling today?</h1>
      </div>
    </CurrentResourceProvider>
  );
}
