import {
  faHome,
  faFileInvoiceDollar,
  faCreditCard,
  faDollarSign,
  faSignal,
  faExchangeAlt,
  faBarcode,
  faCalendar,
  faPercent,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
  {
    name: "consultar saldo",
    path: "/consultar-saldo",
    icon: faHome,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inEasyAccess: true
  },
  {
    name: "extrato da conta",
    path: "/extrato-da-conta",
    icon: faFileInvoiceDollar,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inEasyAccess: true
  },
  {
    name: "cartões",
    path: "/cartoes",
    icon: faCreditCard,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inEasyAccess: true
  },
  {
    name: "emitir cobrança",
    path: "/emitir-cobranca",
    icon: faDollarSign,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inEasyAccess: true
  },
  {
    name: "gestão de cobrança",
    path: "/gestao-de-cobranca",
    icon: faSignal,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inEasyAccess: true
  },
  {
    name: "transferência",
    path: "/transferencia",
    icon: faExchangeAlt,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inEasyAccess: true
  },
  {
    name: "pagamentos",
    path: "/pagamentos",
    icon: faBarcode,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inEasyAccess: true
  },
  {
    name: "agendamentos",
    path: "/agendamentos",
    icon: faCalendar,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inMore: true
  },
  {
    name: "comprovantes",
    path: "/comprovantes",
    icon: faFileInvoiceDollar,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inMore: true
  },
  {
    name: "tarifas",
    path: "/tarifas",
    icon: faPercent,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inMore: true
  },
  {
    name: "fale conosco",
    path: "/fale-conosco",
    icon: faWhatsapp,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inMore: true
  },
  {
    name: "beneficios",
    path: "/beneficios",
    icon: faStar,
    layout: "/dashboard",
    component: Home,
    inSidebar: true,
    inMore: true
  },
];

export default routes;
