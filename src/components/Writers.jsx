import React from "react";
import { Link } from "react-router-dom";

const Writers = props => {
  return (
    <ul>
      {props.writers.map(({ _id, name }) => (
        <li key={_id}>
          <Link to="">{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Writers;
