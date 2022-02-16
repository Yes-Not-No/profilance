import "./newsItem.scss";

export default function NewsItem(props) {
  return (
    <div className="news-item">
      <div className="news-item__title">{props.title}</div>
      <div className="news-item__description">{props.text}</div>
      <div className="news-item__date">{props.date}</div>
    </div>
  );
}
