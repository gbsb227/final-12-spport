import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Upload from '../pages/Upload';
import AddGame from '../pages/AddGame';
import Chat from '../pages/Chat';
import ChatRoom from '../pages/ChatRoom';
import EditProfile from '../pages/EditProfile';
import Error from '../pages/Error';
import Follow from '../pages/Follow';
import Post from '../pages/Post';
import Search from '../pages/Search';
import Profile from '../pages/Profile';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/upload' element={<Upload />} />
      <Route path='/addgame' element={<AddGame />} />
      <Route path='/error' element={<Error />} />
      <Route path='/edit' element={<EditProfile />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/profile/:id/*' element={<Outlet />}>
        <Route path='' element={<Profile />} />
        <Route path='follower' element={<Follow />} />
        <Route path='following' element={<Follow />} />
      </Route>
      <Route path='/chat/:id' element={<ChatRoom />} />
      <Route path='/search' element={<Search />} />
      <Route path='/search/:id' element={<Search />} />
      <Route path='/post/:id' element={<Post />} />
    </Routes>
  );
}
