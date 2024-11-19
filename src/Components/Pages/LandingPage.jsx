import { useState } from 'react'
import MainPage from './MainPage';
import '../../Styles/LandingPage.css';

export default function LandingPage() {
    const [productListPage, setProductListPage] = useState(false);

    const handleGetStartedClick = () => {
        setProductListPage(!productListPage);
    }

    const handleProductListPage = (data) => {
      setProductListPage(data);
    }

  return (
    <>
    {productListPage ?  <MainPage onSendData={handleProductListPage}/> :
    <div className='landing-page'>
      <div className='container'>
      <div className='company-name'>
          <h1>Nature Nest</h1>
      </div>
      <div className='company-description'>
            <h2>Welcome to Nature Nest!</h2>
            <p> At Nature Nest, we bring the joy of greenery to your indoor spaces. Whether you’re a seasoned plant enthusiast or just starting your journey, we offer a curated selection of premium houseplants, stylish planters, and expert care tips to help your plants — and your spaces — thrive.
            Our mission is to reconnect people with nature, one plant at a time. From boosting your mood to purifying the air, we believe that houseplants are more than decor; they’re a lifestyle. With sustainable practices and personalized guidance, we make it easy for everyone to create a vibrant, healthy, and serene home.
            Explore our collection today and let’s grow your green oasis together!
          </p>
      </div>
      <div className='get-started-button'>
        <button onClick={handleGetStartedClick}>Get Started</button>
      </div>
      </div>
    </div>
    }
    </>
  )
}
