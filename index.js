import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';


document.addEventListener('click',(e)=>{
if(e.target.dataset.likes){
    handleLikeClick(e.target.dataset.likes)
}
else if(e.target.dataset.retweet){
    handleRetweet(e.target.dataset.retweet)
}
else if(e.target.dataset.replies){
    handleReplies(e.target.dataset.replies)
}
else if(e.target.id === 'tweet-btn'){
    handleTweetBtn()
}
})

function handleLikeClick(likeID){

const targetTweetObj = tweetsData.filter((tweet)=>{
return likeID === tweet.uuid
})[0]



if(targetTweetObj.isLiked){
    targetTweetObj.likes--
 
}
else{
    targetTweetObj.likes++
}
targetTweetObj.isLiked = !targetTweetObj.isLiked


render()

}

function handleRetweet(retweetID){

const targetTweetObj = tweetsData.filter((tweet)=>{
return retweetID === tweet.uuid
})[0]

if(targetTweetObj.isRetweeted){
    targetTweetObj.retweets--
}
else {
    targetTweetObj.retweets++
}
targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted

render()

}

function handleReplies(replyID){

document.getElementById(`replies-${replyID}`).classList.toggle('hidden')

}

function handleTweetBtn(){
    
const tweetInput = document.getElementById('tweet-input')

if(tweetInput.value){
    
    tweetsData.unshift({
    handle: `@Scrimba`,
    profilePic: `images/scrimbalogo.png`,
    likes: 0,
    retweets: 0,
    tweetText: `${tweetInput.value}`,
    replies: [],
    isLiked: false,
    isRetweeted: false,
    uuid: uuidv4()
}) }
tweetInput.value = ''
render()
}

function getfeedhtml(){
 

    

    let feedhtml = ``

    tweetsData.forEach((tweet)=>{
        
        let likedClass = ''
        if(tweet.isLiked){
            likedClass = 'liked'
        }

        let retweetClass = ''
        if(tweet.isRetweeted){
            retweetClass = 'retweeted'
        }

        let tweetReply = ''

       if(tweet.replies.length > 0){

        tweet.replies.forEach((reply)=>{
            tweetReply +=`<div class="tweet-reply">
            <div class="tweet-inner">
                <img src="${reply.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${reply.handle}</p>
                        <p class="tweet-text">${reply.tweetText}</p>
                    </div>
                </div>
        </div>`


        } )

       }




        feedhtml+=`<div class="tweet">
        <div class="tweet-inner">
            <img src="${tweet.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${tweet.handle}</p>
                <p class="tweet-text">${tweet.tweetText}</p>
                <div class="tweet-details">
                    <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots like" data-replies="${tweet.uuid}" ></i>
                        ${tweet.replies.length}
                    </span>
                    
                    <span class="tweet-detail">
                    <i class="fa-heart fa-solid ${likedClass}" data-likes = "${tweet.uuid}" ></i>
                        ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                    <i class="fa-retweet fa-solid ${retweetClass}" data-retweet = "${tweet.uuid}"></i>
                        ${tweet.retweets}
                    </span>
                </div>   
            </div>            
        </div>
        <div id="replies-${tweet.uuid}" class="hidden">
        ${tweetReply}
        </div>
    </div>`
    })

return feedhtml
}

function render(){

    document.getElementById('feed').innerHTML = getfeedhtml()
}

render()