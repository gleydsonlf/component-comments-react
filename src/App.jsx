import { useState } from "react";

export default function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = ev => {
    ev.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date(),
    };

    setComments(state => [newComment, ...state]);

    setAuthor("");
    setContent("");
  };

  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input
          type="text"
          id="author"
          required
          value={author}
          onChange={ev => setAuthor(ev.target.value)}
        />
        <label htmlFor="content">Comentário</label>
        <textarea
          id="content"
          cols="30"
          rows="6"
          required
          value={content}
          onChange={ev => setContent(ev.target.value)}
        ></textarea>
        <button>Enviar comentário</button>
      </form>
      <hr />
      <section id="comments">
        {/* <div>
          <h3>autor@email.com</h3>
          <span>Em 01/01/2001</span>
          <p>Comentário de exemplo</p>
        </div> */}

        {comments.length > 0 ? (
          comments.map(comment => (
            <div key={comment.id}>
              <hr></hr>
              <h3>{comment.author}</h3>
              <span>Em: {comment.createdAt.toLocaleString()}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <h2>Seja o primero a comentar!</h2>
        )}
      </section>
    </div>
  );
}
