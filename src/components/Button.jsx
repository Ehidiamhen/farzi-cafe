import { Link } from "react-router-dom";

export default function Button({ text,link,classname }) {
  return (
    <div className={classname}>
        <button className="w-fit px-6 py-4 my-4 rounded border border-gold">
          <Link to={link}>{text}</Link>
        </button>
    </div>
  )
}
