import Home from "views/pages/Dashboard/Home";

const routes = [
  {
    name: "home",
    path: "/home",
    layout: "/dashboard",
    component: Home,
    inNavbar: true
  }
];

export default routes;
