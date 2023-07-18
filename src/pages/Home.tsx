import { ChangeEvent, useState } from "react";
import { AiOutlineFileGif } from "react-icons/ai";
import { CgOptions } from "react-icons/cg";
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import  { tweetsArray } from "../db/twitterDB";

function Home() {
  const [newPost, setNewPost] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      setNewPost("");
    }
  };

  return (
    <>
      <h2 className="px-6 mb-8 text-2xl font-semibold">Home</h2>

      <div className="flex  justify-between px-[150px] gap-x-8 mb-8 text-medium font-semibold border-gray-600 border-b-[1px]">
      	 <button className="border-[#1D9BF0] pb-3 border-b-4">For you</button>
     	 <button className="text-gray-600 pb-3">Following</button>
      </div>
      <div className="px-8 pb-4 border-gray-600 border-b-[1px]">
        <textarea
          className="w-full  text-xl bg-transparent resize-none outline-none"
          placeholder="What's happening?"
          value={newPost}
          onChange={handleInputChange}
          rows={2}
        />
        <div className="w-full flex items-center justify-between">
          <div className="flex text-2xl gap-x-2 twitter-color">
            <BsImage />
            <AiOutlineFileGif />
            <CgOptions />
            <BsEmojiSmile />
            <MdOutlineLocationOn />
          </div>
          <button
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full mt-2"
            onClick={handlePostSubmit}
          >
            Tweet
          </button>
        </div>
      </div>

      {tweetsArray.map((item, i) => (
        <div className="flex mt-4 pb-4 border-gray-600 border-b-[1px]" key={i}>
        	<img className="self-start mr-2" src={item.profilePic} alt="account" height={50} width={50}/>
        	<div className="mt-2">
        		<div className="flex gap-x-2">
        			<p className="font-semibold">{item.profileName}</p>
        			<p className="text-gray-400">@{item.profileName}</p>
        		</div>
        		<p className="">{item.postText}</p>
        		{item.media && <img className="py-4" src={item.media} alt="post image" height={100}/>}
        	</div>
        </div>

      ))}
    </>
  );
}

export default Home;
