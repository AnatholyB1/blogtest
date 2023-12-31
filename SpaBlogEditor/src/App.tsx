
import { Loader2 } from 'lucide-react'
import { Suspense, lazy, useEffect, useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom'
const Blog = lazy(() => import('./pages/blog/page'))
const Preview = lazy(() => import('./pages/preview/page'))
const NewBlog = lazy(() => import('./pages/newPost/page'))
const NewCategory = lazy(() => import('./pages/newCategories/page'))
const NewSystemPage = lazy(() => import('./pages/newSystemPage/page'))
const NewBlogger = lazy(() => import('./pages/newBlogger/page'))
const NewPage = lazy(() => import('./pages/newPage/page'))
const EditCategory = lazy(() => import('./pages/editCategory/page'))
const EditBlog = lazy(() => import('./pages/editBlog/page'))
const EditBlogger = lazy(() => import('./pages/editBlogger/page'))
const EditPage = lazy(() => import('./pages/editPage/page'))
const EditSystemPage = lazy(() => import('./pages/editSystemPage/page'))
const Test = lazy(() => import('./component/test'))




const router = createBrowserRouter(
	createRoutesFromElements(
		<Route  path='/' >
			<Route index element={<Blog/>}></Route>
			<Route path="newPost" element={<NewBlog/>}></Route>
			<Route path="newCategories" element={<NewCategory/>}></Route>
			<Route path="newSystemPage" element={<NewSystemPage/>}></Route>
			<Route path="newBlogger" element={<NewBlogger/>}></Route>
			<Route path="newPage" element={<NewPage/>}></Route>
			<Route path="editCategory" element={<EditCategory/>}></Route>
			<Route path="editPost" element={<EditBlog/>}></Route>
			<Route path="editBlogger" element={<EditBlogger/>}></Route>
			<Route path="editPage" element={<EditPage/>}></Route>
			<Route path="editSystemPage" element={<EditSystemPage/>}></Route>
			<Route path="preview" element={<Preview/>}></Route>
			<Route path="test" element={<Test/>}></Route>
		</Route>
	),
	{basename :  '/SpaBlogEditor'}

)


function App() {
	const [state, setState] = useState(true)
	const token =  document.cookie.split('; ').find(row => row.startsWith('user_id'))?.split('=')[1]!

	useEffect(() => {
	if(token == 'Guest'){
	window.location.href = '/login'
	}else{
		setState(false)
	}
	},[token])
	
  return (
	<Suspense fallback={<Loader2 className='animate-spin w-8 h-8 stroke-2 absolute left-1/2 top-1/2'/>}>
	{state ? 
		<Loader2 className='animate-spin w-8 h-8 stroke-2 absolute left-1/2 top-1/2'/>
	:
	
		<RouterProvider router={router}/>
	}
	</Suspense>
  )
}

export default App
