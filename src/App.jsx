import { BrowserRouter, Routes, Route } from 'react-router';
import { RootLayout, ProtectedLayout, AdminLayout } from '@/layouts';
import { CreatePost, Home, Login, NotFound, Post, Register, Dashboard } from '@/pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='post/:id' element={<Post />} />
        <Route path='create' element={<ProtectedLayout />}>
          <Route index element={<CreatePost />} />
        </Route>
        <Route path='dashboard' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
