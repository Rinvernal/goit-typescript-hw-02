
const Articles = ({articles}) => {
  return (
    <div>
      <ul>
        {articles.map(post => 
          <li key={post.objectID}>{post.title}</li>
        )}
      </ul>
      </div>
  )
}

export default Articles