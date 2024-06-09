import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage({ products }) {
  // console.log('useParams', useParams()); // {productId: '7'}
  const { productId } = useParams();

  // const targetProduct = productInfos[Number(productId) - 1]; // js 알아서 연산(문자열 -> 숫자)

  const targetProduct = products[Number(productId) - 1];
  console.log(targetProduct);
  const { id, name, email, body } = targetProduct;

  const navigate = useNavigate();
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동</button>
      <ul>
        <li>상품 번호: {id}</li>
        <li>상품명: {name}</li>
        <li>판매자: {email}</li>
        <li>상세 설명: {body}</li>
      </ul>
    </div>
  );
}
