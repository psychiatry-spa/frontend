import { useEffect, useState } from "react";

const useSwitchSidebar = () => {
    const [sidebar, setSidebar] = useState("");
    const sidebarElem = document.getElementById("sidebar");
  
    useEffect(() => {
      if (sidebar === "hidden") sidebarElem?.classList.remove("hidden");
      else sidebarElem?.classList.add("hidden");
    }, [sidebar]);

    return { sidebar, setSidebar }
}

export default useSwitchSidebar