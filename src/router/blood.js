import Stock from "../views/blood/stock/Stock";
import SpecificStock from "../views/blood/stock/SpecificStock";

export const bloodRouter = [
  { path: "/blood/stocks", element: <Stock /> },
  { path: "/blood/stocks/:id", element: <SpecificStock /> },
];
