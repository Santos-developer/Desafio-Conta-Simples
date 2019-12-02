import Home from "views/pages/Dashboard/Home";

const routes = [
  {
    name: "home",
    path: "/home",
    layout: "/dashboard",
    component: Home,
    inNavbar: true
  },
  {
    name: "cobrar",
    path: "/cobrar",
    layout: "/dashboard",
    component: Home,
    inNavbar: true
  },
  {
    name: "gestão",
    path: "/gestao",
    layout: "/dashboard",
    component: Home,
    inNavbar: true
  },
  {
    name: "pagar",
    path: "/pagar",
    layout: "/dashboard",
    component: Home,
    inNavbar: true
  },
  {
    name: "cartões",
    path: "/cartoes",
    layout: "/dashboard",
    component: Home,
    inNavbar: true
  },
];

export default routes;
