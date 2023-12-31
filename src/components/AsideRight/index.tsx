import { BsSearch } from "react-icons/bs";
import { topHashtags, tweetsArray,  } from "../../db/twitterDB";




function AsideRight() {
	return (
		<aside className="hidden sticky right-0 top-0 max-w-[375px] h-screen lg:flex flex-col  gap-y-4 overflow-hidden px-4 py-2 overflow-y-auto invisible-scrollbar">
			<div className="flex gap-x-4 px-8 py-2 rounded-full items-center bg-[#16181C]">
				<BsSearch/>
				<input className="bg-transparent" type="text" placeholder="Search Twitter"/>
			</div>

			<div className="bg-[#16181C] p-4 rounded-xl">
				<p className="text-2xl font-bold">Get Verified</p>
				<p className="font-semibold mt-2">Suscribe to unloock new features</p>
				<button className="font-semibold twitter-bg px-4 py-2 mt-2 rounded-full">Get Verified</button>
			</div>

			<div className="bg-[#16181C] p-4 rounded-xl">
				<p className="text-xl font-bold  mb-3">What´s happening</p>
				<div>
					{topHashtags.map((item,i)=>(
						<div className="mb-4" key={i}>
							<p className="text-sm text-gray-500">{item.topic}</p>
							<p className="font-semibold">{item.title}</p>
							<p className="text-sm text-gray-500 mt-1">{item.tweetsNum} Tweets</p>
						</div>
					))}
					<button className="twitter-color mt-3">Show more</button>
				</div>
			</div>

			<div className="bg-[#16181C] p-4 rounded-xl">
				<p className="text-xl font-bold  mb-3">Who to follow</p>
				<div>
					{tweetsArray.slice(0,3).map((item,i)=>(
						<div className="flex mb-3 items-center justify-between" key={i}>
							<div className="flex items-center">
								<img src={item.profilePic} alt={item.profileName} width={50} height={50}/>
								<div >
									<p className="font-semibold">{item.profileName}</p>
									<p className="text-sm text-gray-500">{`@${item.profileName}`}</p>
								</div>
							</div>
							<button className="twitter-bg text-white text-sm font-semibold p-2 rounded-full">
								Follow
          					</button>
						</div>
					))}
				</div>
				<button className="twitter-color mt-3">Show more</button>
			</div>
			<div className="flex flex-wrap gap-2 text-gray-500 text-[13px] p-4 ">
				<p>Terms of Service</p>
				<p>Privacy Policy</p>
				<p>Cookie Policy</p>
				<p>Accessibility</p>
				<p>Ads info</p>
				<p>More</p>
				<p>@2023 Corp</p>
			</div>
		</aside>
	)
}

export default AsideRight