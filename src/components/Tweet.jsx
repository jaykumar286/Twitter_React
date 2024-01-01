import { useState } from 'react'
import '../CSS/Tweet.css'

export default function Tweet({id,content,likeCount,createdAt,onEditTweet}) {
  const [isEditing,setIsEditting] = useState(false);
  return (
    <div className='tweet-wrapper'>
      <div className='tweet-edit-wrapper'>
        <div className="tweet-content">
          {
            isEditing ? <input type="text" value={content} onChange={(e)=>onEditTweet({
              id:id,
              content: e.target.value,
              likeCount:likeCount,
              createdAt:createdAt
            })}/>: content
          }
        </div>
        <div className='edit-tweet'>
          <button onClick={()=>setIsEditting(!isEditing)}>{isEditing?'save':'edit'}</button>
        </div>
      </div>
      <div className="like-createdAt-wrapper">
        <div className="likes">
          {likeCount} likes
        </div>
        <div className='created-at'>
          <b>Tweeted at</b> {createdAt}
        </div>
      </div>
    </div>
  )
}
