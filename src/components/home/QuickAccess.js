import { FaUsers } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { LuUserRoundSearch } from "react-icons/lu";

import Container from "../ui/Container";
import QuickAccessCard from "./QuickAccessCard";

const quickAccessItems = [
  {
    id: "players",
    title: "پیدا کردن بازیکن",
    description: "جستجو بر اساس نقش، رنک و ...",
    href: "/players",
    icon: LuUserRoundSearch,
    variant: "green",
  },
  {
    id: "posts",
    title: "آگهی های تیمی",
    description: "درخواست تیم یا بازیکن",
    href: "/posts",
    icon: FaUsers,
    variant: "blue",
  },
  {
    id: "tournaments",
    title: "مسابقات",
    description: "مشاهده و ثبت نام در تورنومنت ها",
    href: "/tournaments",
    icon: GiTrophyCup,
    variant: "gold",
  },
  {
    id: "news",
    title: "اخبار Dota 2",
    description: "جدیدترین اخبار و آپدیت ها",
    href: "/news",
    icon: HiOutlineNewspaper,
    variant: "purple",
  },
];

function QuickAccess() {
  return (
    <Container className="relative z-20 -mt-8 lg:-mt-20">
      <div className="bg-background rounded-xl grid grid-cols-2 lg:grid-cols-4 gap-3  lg:gap-4">
        {quickAccessItems.map((item) => (
          <QuickAccessCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}

export default QuickAccess;
