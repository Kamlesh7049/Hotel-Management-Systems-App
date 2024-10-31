import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Service from "./pages/Service";
import BookNow from "./pages/BookNow";
import Display from "./pages/Display";
import Update from "./pages/Update";
import Contact from "./pages/Contact";
import SearchByName from "./pages/SearchByName";
import EditData from "./pages/EditData";





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="service" element={<Service/>}/>
          <Route path="booknow" element={<BookNow/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="update" element={<Update/>}/>
          <Route path="editdata" element={<EditData/>}/>
          <Route path="contactus" element={<Contact/>}/>
          <Route path="search" element={<SearchByName/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
