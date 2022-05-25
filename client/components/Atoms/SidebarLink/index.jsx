import Link from "next/link";
import { useRouter } from "next/router";
import Iconx from "../Icons/Iconx";
import styles from "../../../styles/Sidebar.module.scss";

const SidebarRoutes = [
  {
    title: "Dashboard",
    icon: "DesktopComputerIcon",
    route: "/admin",
  },
  {
    title: "Item Management",
    icon: "UserAddIcon",
    route: "/admin/itemmanagement",
  },
  {
    title: "Category Management",

    icon: "ArchiveIcon",
    route: "/admin/categorymanagement",
  },
];

const SidebarLink = () => {
  const router = useRouter();
  return (
    <>
      {SidebarRoutes.map((sidebarRoute, i) => (
        <div
          key={i}
          className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
            router.pathname === `${sidebarRoute.route}` &&
            "hover:slate-slate-900"
          }`}>
          <Link href={sidebarRoute.route}>
            <a
              className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                router.pathname === `${sidebarRoute.route}` &&
                "hover:text-white text-blue-500"
              }`}>
              <div className="flex items-center">
                <Iconx icon={sidebarRoute.icon} className={styles.menuIcon} />
                <span className="ml-3 text-sm font-medium duration-200 result_font lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                  {sidebarRoute.title}
                </span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SidebarLink;
