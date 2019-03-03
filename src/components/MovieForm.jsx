import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Name is: {match.params.title} </h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
