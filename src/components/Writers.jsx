import React from "react";
import { Link } from "react-router-dom";

export default ({ match: { url }, writers }) => {
  return (
    <ul>
      {writers.map(({ _id, name }) => (
        <li key={_id}>
          <Link to={`${url}/${_id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
