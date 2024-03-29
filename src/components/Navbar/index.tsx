import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { classes } from "@utils";
import DropdownMenu from "@components/DropdownMenu";
import MenuItem from "@components/DropdownMenu/MenuItem";
import styles from "./navbar.module.less";

export default function Navbar() {
  const [atTop, setAtTop] = useState(true);

  const onScroll = useCallback((evt: Event) => {
    if (window.scrollY > 0) setAtTop(false);
    else setAtTop(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={classes(
        styles.navbar,
        !atTop && styles.stuck,
        "h-16",
        "flex",
        "px-5",
        "z-50",
        "bg-[rgba(255,255,255,.75)]",
        "w-full",
        "transition-all",
        "justify-between",
        "md:px-40",
        "lg:px-80",
        "sticky",
        "top-0"
      )}
    >
      <NavLink to="/" className={classes("self-center", "text-2xl")}>
        <h1>Tekxchange</h1>
      </NavLink>
      <div className={classes("self-center")}>
        <DropdownMenu buttonText="Account">
          <MenuItem buttonText="Login" />
        </DropdownMenu>
      </div>
    </div>
  );
}
