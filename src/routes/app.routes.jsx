import { Routes, Route } from 'react-router-dom';
import { Add } from '../pages/Add';
import { Home } from '../pages/Home';
import { MoviePreview } from '../pages/MoviePreview';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/movie_preview/:id' element={<MoviePreview/>}/>
    </Routes>
  );
}