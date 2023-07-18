import { AiOutlineArrowLeft } from "react-icons/ai"
import { MdOutlineLocationOn } from "react-icons/md"
import { tweetsArray } from "../db/twitterDB"

function Profile() {
	return (
		<>
			<div className="flex items-center justify-between mx-8">
				<div className="flex items-center gap-x-8">
					<AiOutlineArrowLeft/>
					<div>
						<h2 className="text-xl font-bold">Nick Loza</h2>
						<p className="text-gray-400">11 Tweets</p>
					</div>
				</div>
			</div>

			<div className="flex items-end justify-between bg-[#ac8] w-full h-[250px]">
				<img className="bg-black rounded-full" src="http://robohash.org/888" alt="profile image" width={150}/>	
				<button className="py-2 px-4 text-medium bg-black rounded-full m-2 border-gray-400 border-[1px]">Edit profile</button>
			</div>

			<section className="mx-4">
				<div className="mt-4">
				<p className="text-xl font-bold">Nick Loza</p>
				<p className="text-gray-400">@NickLozaDev</p>
				</div>

				<p className="max-w-[550px] mt-2">
					Frontend Developer React <br/>
					REACT / Next.JS / JS / TYPESCRIPT / SASS / Tailwind CSS / Node.js<br/>
					Hablo Español, Ingles e Italiano
				</p>

				<p className="flex  items-center gap-x-1 text-gray-400 my-2">
					<MdOutlineLocationOn/>
					Argentina
				</p>

				<div className="flex items-center text-gray-400 gap-x-3 my-2">
					<p><span className="text-white font-bold">224</span> Following</p>
					<p><span className="text-white font-bold">400</span> Followers</p>
				</div>

				<div className="flex  justify-between px-[25px] gap-x-2 mt-6 mb-3 text-medium font-semibold border-gray-600 border-b-[1px]">
		      	 <button className="border-[#1D9BF0] pb-3 border-b-4 w-14">Tweets</button>
		     	 <button className="text-gray-600 pb-3">Replies</button>
		     	 <button className="text-gray-600 pb-3">Hightlights</button>
		     	 <button className="text-gray-600 pb-3">Media</button>
		     	 <button className="text-gray-600 pb-3">Likes</button>
      		</div>
			</section>

			<section>
				 {tweetsArray.map((item, i) => (
        <div className="flex mt-4 pb-4 border-gray-600 border-b-[1px]" key={i}>
        	<img className="self-start mr-2" src="http://robohash.org/888" alt="account" height={50} width={50}/>
        	<div className="mt-2">
        		<div className="flex gap-x-2">
        			<p className="font-semibold">Nick Loza</p>
        			<p className="text-gray-400">@NickLozaDev</p>
        		</div>
        		<p className="">{item.postText}</p>
        		{item.media && <img className="py-4" src={item.media} alt="post image" height={100}/>}
        	</div>
        </div>

      ))}
			</section>
		</>
	)
}

export default Profile