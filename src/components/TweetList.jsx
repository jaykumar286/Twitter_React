import Tweet from "./Tweet"
import '../CSS/TweetList.css'
export default function TweetList({tweets,onEditTweet}) {
  return (
    <ul className="tweet-list">
      {
        tweets.map((tweet)=> (
            <li className="tweet-like-wrapper" key={tweet.id}>
                <Tweet id={tweet.id} content={tweet.content} likeCount={tweet.likeCount} createdAt={tweet.createdAt.toString()} onEditTweet={onEditTweet}/>
            </li>
        ))
      }
    </ul>
  )
}
