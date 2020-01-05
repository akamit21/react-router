import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    const {
      match: { url }
    } = this.props;
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => (
        <div className="post card" key={post.id}>
          <div className="card-content">
            <Link to={`${url}/${post.id}`}>
              <span className="card-title">{post.title}</span>
            </Link>

            <p>{post.body}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="center">No post found!</div>
    );

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Posts;
