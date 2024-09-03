export interface NavbarItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavbarItem[];
}

const navbarData: NavbarItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Category",
    path: "/category",
  },
  {
    label: "Write a Review",
    path: "/review",
  },
  {
    label: "Businessess",
    path: "/businessess",
  },
];

export default navbarData;
