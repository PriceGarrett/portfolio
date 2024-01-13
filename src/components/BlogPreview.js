export default function BlogPreview({ title, date, summary }) {
  return (
    <div className="blog-preview">
      <img className="blog-thumbnail" src="/images/placeholder.webp"></img>
      <div className="blog-preview-details">
        <h3>{title}</h3>
        <h4>{date}</h4>
      </div>
      <p>{summary}</p>
    </div>
  );
}
