import CommentServices, { CommentData } from "./services/CommentServices";
import useUsers from "./hooks/useComments";

function App() {
  const { comments, setComments, error, setError, isLoading } = useUsers();

  const deleteComment = (userComment: CommentData) => {
    const originalComments = [...comments];
    setComments(comments.filter((comment) => comment !== userComment));

    CommentServices.delete(userComment.id).catch((err) => {
      setError(err.message);
      setComments(originalComments);
    });
  };

  const createComment = () => {
    const originalComments = comments;
    const newComment: CommentData = {
      id: 0,
      name: "alireza",
      body: ";fidsfjae;f;sdfjaeifjadjfas;d",
    };
    setComments([newComment, ...comments]);

    CommentServices.create<CommentData>(newComment)
      .then(({ data: savedUser }) => setComments([savedUser, ...comments]))
      .catch((err) => {
        setError(err.message);
        setComments(originalComments);
      });
  };

  const updateComment = (userComment: CommentData) => {
    const originalComments = comments;
    const updatedComment = { ...userComment, name: userComment.name + "!!!" };
    setComments(
      comments.map((comment) =>
        comment.id === userComment.id ? updatedComment : comment
      )
    );

    CommentServices.update<CommentData>(updatedComment).catch((err) => {
      setError(err.message);
      setComments(originalComments);
    });
  };
  return (
    <div>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <div className="mb-3">
        <button className="btn btn-success" onClick={createComment}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="list-group-item d-flex justify-content-between"
          >
            {comment.name}{" "}
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => updateComment(comment)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteComment(comment)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
