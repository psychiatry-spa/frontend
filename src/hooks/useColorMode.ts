import { useEffect, useState } from "react";

const useColorMode = () => {
    const [colorMode, setColorMode] = useState("light");

    useEffect(() => {
      if (colorMode == "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }, [colorMode]);

    return {colorMode, setColorMode}
}

export default useColorMode