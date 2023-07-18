import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));
const Explore = lazy(() => import('../pages/Explore'));
const Notifications = lazy(() => import('../pages/Notifications'));
const Messages = lazy(() => import('../pages/Messages'));
const Lists = lazy(() => import('../pages/Lists'));
const Bookmarks = lazy(() => import('../pages/Bookmarks'));
const Communities = lazy(() => import('../pages/Communities'));
const Profile = lazy(() => import('../pages/Profile'));


function Routers() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<Navigate to={"/home"}/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/explore" element={<Explore/>}/>
				<Route path="/notifications" element={<Notifications/>}/>
				<Route path="/messages" element={<Messages/>}/>
				<Route path="/lists" element={<Lists/>}/>
				<Route path="/bookmarks" element={<Bookmarks/>}/>
				<Route path="/communities" element={<Communities/>}/>
				<Route path="/profile" element={<Profile/>}/>
				<Route path="*" element={<Navigate to={"/home"}/>}/>
			</Routes>
		</Suspense>
	)
}

export default Routers