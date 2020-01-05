import React from "react";
import Axios from "axios";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
    };
  }

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;
    console.log(params);
    Axios.get("https://jsonplaceholder.typicode.com/posts/" + params.post_id)
      .then(res => {
        console.log(res);
        this.setState({
          post: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { post } = this.state;
    return (
      <div className="container">
        <h4 className="center">{post.title}</h4>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default Post;
