import posts from "../../Utils/posts";


const Posts = () =>{

    return (
        <div className="post-container">
            {posts.map((post)=>{
                return(
                    <div className="post">
                        <h3>{post.name}</h3>
                        <p>{post.text}</p>
                        <p>{post.upvotes}</p>
                        <span>{post.downvotes}</span>
                    </div>
                )
                }
            )}
        
        </div>
    )
};

export default Posts;
