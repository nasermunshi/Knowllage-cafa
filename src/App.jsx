import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarka from './components/Bookmarks/Bookmarka'
import Header from './components/Header/Header'

function App() {
  

  return (
    <> 
     
     <Header></Header> 
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmarka></Bookmarka>
     </div>
    </>
  )
}

export default App
