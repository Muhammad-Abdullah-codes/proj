import { useEffect } from "react";

export function usePageTitle(title: string) {
  useEffect(() => {
    // Set the title when the component mounts
    document.title = `${title} | DevelopersHub Agency`;

    // Optional: Reset title when component unmounts (cleanup)
    return () => {
      document.title = "DevelopersHub | Next-Gen Software Agency";
    };
  }, [title]); // Re-run if the title prop changes
}
