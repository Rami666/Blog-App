export default function Post() {
  return (
    <div className="post">
    <div className="image">
      <img
        src="https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737_960_720.jpg"
        alt=""
      />
    </div>

    <div className="texts">
      <h2>Lorem ipsum dolor sit amet consectetur, adipisicin</h2>
      <p className="info">
        <a className="author">Dawid Paszko</a>
        <time>2023-01-06 16:45</time>
      </p>
      <p className="summary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        nam magnam reiciendis blanditiis ipsam vero aliquid accusamus aut?
        De
      </p>
    </div>
  </div>
  )
}
