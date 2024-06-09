import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import ProductDetailPage from './pages/ProductDetailPage';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import StudentHeader from './components/StudentHeader';
import StudentDetail from './components/StudentDetail';

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    setProducts(res.data.slice(0, 10));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetailPage products={products} />}
          />

          {/* 실습 */}
          <Route path="/student" element={<StudentHeader />} />
          <Route path="/student/:name" element={<StudentDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
