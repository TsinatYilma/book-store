import { Book } from "@/app/lib/definition";
import "@/app/globals.css";
<<<<<<< HEAD
import { topRatedbooks } from "@/app/lib/fetching-data";
=======
import { topRatedbooks } from "@/app/lib/API_Calls/fetching-data";
>>>>>>> 528e1d9 (yeserashen yestesh)
import { books, TopRatedbooks } from "@/app/lib/placeholder-data";
import { handlee, gabarito } from "@/app/ui/fonts";
import Link from "next/link";
import Category from "../category";

interface Props {
  params: { category: string };
}

export default function BookCategory({ params }: Props) {
  const { category } = params;
  console.log("Category:", category);
  return <Category category={category} TopRatedbooks={TopRatedbooks} />;
}
