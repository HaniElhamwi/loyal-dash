import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CategoryIcon from "@mui/icons-material/Category";

export const navItems = [
  {
    title: "HOME",
    url: "/home",
    icon: (
      <HomeIcon
        className="text-gray-400 text-[24px]"
        style={{ color: "inherit" }}
      />
    ),
    id: 1,
  },
  {
    title: "PRODUCTS",
    url: "/dashboard/products",
    icon: (
      <ShoppingBagIcon
        className={` text-[24px]`}
        style={{ color: "inherit" }}
      />
    ),

    id: 2,
    items: [
      {
        id: 3,
        title: "LIST",
        url: "/dashboard/products",
      },
      {
        id: 4,
        title: "CREATE",
        url: "/dashboard/products/create",
      },
    ],
  },
  {
    title: "CATEGORY",
    url: "/category",
    icon: (
      <CategoryIcon
        className="text-gray-400 text-[24px]"
        style={{ color: "inherit" }}
      />
    ),
    id: 2,
    items: [
      {
        id: 3,
        title: "LIST",
        url: "/dashboard/category",
      },
      {
        id: 4,
        title: "CREATE",
        url: "/dashboard/category/create",
      },
    ],
  },
];
