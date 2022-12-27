// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import BookList from "./components/BookList";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import FutureReads from "./components/FutureReads";

function App() {
  const [inputValue, setInputValue] = useState('');

  console.log(inputValue)

  return (
    <div className="container">
      <Header />
      <SearchForm setInputValue={setInputValue} inputValue={inputValue}/>
      <Routes>
        <Route path='/' element={<BookList inputValue={inputValue}/>}/>
        <Route path='/futureReads' element={<FutureReads />}/>
      </Routes>
    </div>
  );
}

export default App;
