import List from "../components/list/List";
import { NEWS } from "../data/dummy-data";

export default function USNewsScreen() {
  const type = "US News";
  const displayedNews = NEWS.filter(newsItem => {return newsItem.type === type});

  return <List items={displayedNews} />;
}
