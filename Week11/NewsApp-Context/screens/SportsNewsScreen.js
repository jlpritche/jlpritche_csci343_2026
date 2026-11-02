import List from "../components/list/List";
import { NEWS } from "../data/dummy-data";

export default function SportsNewsScreen() {
  const type = "Sports News";
  const displayedNews = NEWS.filter(newsItem => {return newsItem.type === type});

  return <List items={displayedNews} />;
}
