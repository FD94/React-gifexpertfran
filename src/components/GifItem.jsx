export const GifItem = ({ title, url }) => {
  return (
    <>
      <div style={{ marginLeft: "30px ", width: "50%", padding: "20px" }}>
        <img src={url} alt={title} />
        <p>
          <b>{title}</b>
        </p>
      </div>
      <div style={{ margin: "45px" }}>
        <button className="btn btn-primary">Like</button>
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-success">Comentario</button>
      </div>
    </>
  );
};
