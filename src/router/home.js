import Faq from "../views/home/faq/Faq";
import SpecificFaq from "../views/home/faq/SpecificFaq";
import SpecificYouMayLike from "../views/home/youmaylike/SpecificYouMayLike";
import YouMayLike from "../views/home/youmaylike/YouMayLike";

export const homeRouter = [
  { path: "/faq", element: <Faq /> },
  { path: "/faq/:id", element: <SpecificFaq /> },
  { path: "/you-may-like", element: <YouMayLike /> },
  { path: "/you-may-like/:id", element: <SpecificYouMayLike /> },
];
