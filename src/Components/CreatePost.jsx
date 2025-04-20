import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CreatePost() {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleFileChange = (event) => {
    setNewPost({ ...newPost, file: event.target.files[0] });
  };

  const handlePostSubmit = () => {
    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    formData.append("file", newPost.file);

    axios
      .post("http://localhost:5000/api/posts", formData)
      .then((response) => {
        setNewPost({ title: "", content: "", file: null });
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        alert("Failed to create post. Please try again.");
      });
  };

  return (
    <div className="create-post-layout">
      <div className="sidebar">
        <Link><h2>USER</h2></Link>
		<Link><h2>PROFILE</h2></Link>
		<Link to="/Home"><h2>HOME</h2></Link> 
		<h2>CREATE POST</h2>
		<Link><h2>SETTINGS</h2></Link>
      </div>

      <div className="main-content">
        <div className="create-post-container">
          <div className="create-post" style={{width:"500px",height:"600px"}}>
            <h2 style={{height:"60px"}}>Create a Post</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newPost.title}
              onChange={handleInputChange}
              className="create-input"
			style={{marginTop:"50px",marginBottom:"50px",height:"48px"}}
            />
            <textarea
              name="content"
              placeholder="Content"
              value={newPost.content}
              onChange={handleInputChange}
              className="create-textarea"
			style={{height:"138px"}}
            ></textarea>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="create-file"
			style={{marginTop:"50px",height:"87px",paddingTop:"29px",backgroundImage:"grey"}}
            />
            <button onClick={handlePostSubmit} className="create-button" style={{marginTop:"60px",height:"48px",fontSize:"21px"}}>
              POST
            </button>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          .create-post-layout {
            display: flex;
            justify-content: space-between;
            
            margin: 0 auto;
          }

          .sidebar {
            width: 350px;
            height: 100vh;
            background-color: #94b3fd;
            padding: 20px;
          }

          .main-content {
            flex-grow: 1;
            margin-left: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
  
          }

          .create-post-container {
            max-width: 500px;
            margin: 0 auto; /* Center the container */
            color:black;
          }

          .create-post {
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-image: linear-gradient(to bottom right, #94B3FD, #68D2E8);background-color:blue;
          }

          .create-post h2 {
            text-align: center;
            margin-bottom: 20px;
          }

          .create-input,
          .create-textarea,
          .create-file,
          .create-button {
            display: block;
            width: 100%;
            margin-bottom: 10px;
            padding: 8px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
          }

          .create-button {
            background-color: #628ffc;
            color: black;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default CreatePost;
