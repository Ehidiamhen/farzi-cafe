export default function Button({ text,link, }) {
  return (
    <button className="w-fit px-6 py-4 my-4 rounded border border-gold">
        <a href={link}>{text}</a>
    </button>
  )
}
