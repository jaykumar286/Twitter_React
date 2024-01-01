import { useState } from 'react';
import TweetList from  './TweetList';
import AddTweet from './AddTweet';
const intialDummyTweets = [
    {id:0,content:'india win the world cup',likeCount:200,createdAt:new Date()},
    {id:1,content:'Is puneet superstar a racist?',likeCount:100,createdAt:new Date()},
    {id:2,content:'How the hell guts is alive?',likeCount:40,createdAt:new Date()}
  ];

export default function Twitter() {
    const [tweets,setTweets] = useState(intialDummyTweets);
    
    const handleAddTweet = (text) => {
        const nextTweetId = tweets.length ? tweets[tweets.length - 1].id+1:0;
        setTweets([...tweets,{
            content: text,
            likeCount:Math.floor(Math.random()*10),
            id:nextTweetId,
            createdAt:new Date()
        }])
        console.log('add tweet',tweets);
    };

    const handleEditTweet = (tweet) =>{
      setTweets(
        tweets.map((currentTweet)=>{
          if (tweet.id == currentTweet.id){
            return tweet
          }
          return currentTweet
        })
      )
    };

    const sortTweets = () =>{
      tweets.sort((t1,t2)=>t2.createdAt.getTime()-t1.createdAt.getTime())
      setTweets([...tweets]);
    }

    return (
    <>
      <AddTweet onAddTweet={handleAddTweet} />
      <button onClick={sortTweets}>Sort Tweet by CreatedAt</button>
      <TweetList tweets={tweets} onEditTweet={handleEditTweet}/>
    </>
  )
}
