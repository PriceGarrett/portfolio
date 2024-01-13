import { db } from "../Firebase";
import {collection, doc, setDoc, query, where, getDocs} from "firebase/firestore"
import BlogPreview from "../components/BlogPreview";

const docs = await getDocs(collection(db, "posts"));


export default function BlogHome() {

    const docList = [];
    docs.forEach((doc) => {
        console.log(doc.data().date)
        docList.push(doc.data());
    })

    const blogPreviews = docList.map((preview) => {
        return <BlogPreview title={preview.title} summary={preview.summary} date={new Date(preview.date.seconds * 1000).toLocaleDateString()}/>
    })

  return (
  <div className="blog-container">
    {blogPreviews}
  </div>);
}
