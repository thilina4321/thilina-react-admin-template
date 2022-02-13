import Faq from "../views/home/faq/Faq";
import SpecificFaq from '../views/home/faq/SpecificFaq'


export const homeRouter = [
  { path: "/faq", element: <Faq /> },
  { path: "faq/:id", element: <SpecificFaq /> },
];
