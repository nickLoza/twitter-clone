import { BsSearch } from "react-icons/bs"
import { CiSettings } from "react-icons/ci"
import { topHashtags } from "../db/twitterDB"

function Explore() {
	return (
		<>
			<div className="flex justify-center ">
				<div className="flex gap-x-4 px-8 mx-[25px] mb-5 py-3 rounded-full items-center bg-[#16181C] w-[75%]">
					<BsSearch/>
					<input className="bg-transparent" type="text" placeholder="Search Twitter"/>
					</div>
					<CiSettings size={25} className="mt-3"/>
				</div>
			<div className="flex  justify-between px-[25px] gap-x-2 mb-3 text-medium font-semibold border-gray-600 border-b-[1px]">
		      	 <button className="border-[#1D9BF0] pb-3 border-b-4">For you</button>
		     	 <button className="text-gray-600 pb-3">Trending</button>
		     	 <button className="text-gray-600 pb-3">News</button>
		     	 <button className="text-gray-600 pb-3">Sports</button>
		     	 <button className="text-gray-600 pb-3">Entertainment</button>
      		</div>
      		<div className="px-6">
      		{topHashtags.map((item,i)=>(
      			<div className="mb-4" key={i}>
      			<p className="text-sm text-gray-500">{item.topic}</p>
      			<p className="font-semibold">{item.title}</p>
      			<p className="text-sm text-gray-500 mt-1">{item.tweetsNum} Tweets</p>
      			</div>
      			))}
      		{topHashtags.map((item,i)=>(
      			<div className="mb-4" key={i}>
      			<p className="text-sm text-gray-500">{item.topic}</p>
      			<p className="font-semibold">{item.title}</p>
      			<p className="text-sm text-gray-500 mt-1">{item.tweetsNum} Tweets</p>
      			</div>
      			))}
      		{topHashtags.map((item,i)=>(
      			<div className="mb-4" key={i}>
      			<p className="text-sm text-gray-500">{item.topic}</p>
      			<p className="font-semibold">{item.title}</p>
      			<p className="text-sm text-gray-500 mt-1">{item.tweetsNum} Tweets</p>
      			</div>
      			))}
      		</div>
      		</>
      		)
}

export default Explore