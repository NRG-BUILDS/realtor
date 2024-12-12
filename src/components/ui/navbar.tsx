import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "@/assets/images/tenxseeds.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LucideMenu, LucideX } from "lucide-react";

const Navbar = () => {
  const [navLink, setNavLink] = useState("");
  const [openPopover, setOpenPopover] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavLink(location?.pathname);
  }, [location]);

  return (
    <nav className="z-50 sticky lg:relative top-0 left-0 w-full bg-opacity-5 py-4">
      <div className="container text-white text-sm mx-auto px-2 flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="" className="h-24" />
        </Link>

        <div className="hidden md:flex flex-col lg:flex-row items-end lg:items-center lg:gap-10 justify-end gap-3">
          <Link
            to={"/academy"}
            className={`text-white hover:underline text-primary ${
              navLink.startsWith("/academy") ? `underline` : ""
            }`}
          >
            TENX ACADEMY
          </Link>
          <Link
            to={"/"}
            className={`text-white hover:underline text-primary ${
              navLink === "/" ? `underline` : ""
            }`}
          >
            TENX CONFERENCE
          </Link>
          <Link
            to={"/about-us"}
            className={`text-white hover:underline text-primary ${
              navLink.startsWith("/about-us") ? `underline` : ""
            }`}
          >
            LEARN MORE
          </Link>
        </div>
        <div className="md:hidden pr-4">
          <Popover open={openPopover} onOpenChange={setOpenPopover}>
            <PopoverTrigger>
              {openPopover ? <LucideX size={30} /> : <LucideMenu size={30} />}
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid gap-4">
                <Link
                  to={"/academy"}
                  onClick={() => setOpenPopover(false)}
                  className={`hover:underline ${
                    navLink.startsWith("/academy") ? `underline` : ""
                  }`}
                >
                  TENX ACADEMY
                </Link>
                <Link
                  to={"/"}
                  onClick={() => setOpenPopover(false)}
                  className={`hover:underline ${
                    navLink === "/" ? `underline` : ""
                  }`}
                >
                  TENX CONFERENCE
                </Link>
                <Link
                  to={"/about-us"}
                  onClick={() => setOpenPopover(false)}
                  className={`hover:underline ${
                    navLink.startsWith("/about-us") ? `underline` : ""
                  }`}
                >
                  LEARN MORE
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
