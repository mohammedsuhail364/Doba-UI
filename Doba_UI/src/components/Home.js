import React from 'react';
import { Link } from 'react-router-dom';
import '../Css_files/Home.css'
import { Items } from './Items';
function Home() {
  return (
    <div>
      <div className="nav-bar">
        <a href="#">Be a supplier</a>
        <a href="#">Integrations</a>
        <a href="#">Pricing</a>
        <a href="#">Affiliate</a>
        <a href="#">Help Center</a>
        <a href="#">Resources</a>
      </div>
      <div className="nav-bar1">
        <img src="logo.svg" alt="" />
        <div className="input">
          <input type="text" placeholder='Search Dropshipping Products To Sell' />
          <img src="search.webp" alt="" style={{ width: '40px' }} />
        </div>
        <Link to="/login" style={{marginTop:'10px'}} >Login</Link>
        <Link to='/signup'> <button>Register Now</button></Link>
      </div>
      <div className="nav-bar2">
        <a href="#">New Arrivals</a>
        <a href="#">Top Sellers</a>
        <a href="#">High Profit</a>
        <a href="#">Blowout Sale</a>
        <a href="#">Premium Suppliers</a>
        <a href="#">All Products</a>
        <div className="section1">
          <a href="#">Droppers Elite Academy</a>
        </div>
      </div>
      <div className="maincontent1">
        <div className="leftside">
          <a href="#">Home, Garden & Tools</a>
          <a href="#">Beauty & Health</a>
          <a href="#">Outdoor</a>
          <a href="#">Clothing, Shoes & Jewelry</a>
          <a href="#">Toys, Kids & Baby</a>
          <a href="#">Sports</a>
          <a href="#">Pets</a>
          <a href="#">Electronics</a>
          <a href="#">Computers, Office Supplies</a>
          <a href="#">All Categories</a>
        </div>
        <div className="image">
          <img src="ourimage.jpg" alt="" />
        </div>
        <div className="rightside">
          <h4>Dropshipping Simplified</h4>
          <p>✓ Seamless Integrations</p>
          <p>✓ Secure Supply Chain Support</p>
          <p>✓ Dedicated Account Manager</p>
          <Link to='/signup'> <button>Sign Up</button></Link>
          <h4>Help Center</h4>
          <a href="#">Integrate My Store with Dropper</a>
          <a href="#">Discover Products & Suppliers</a>
          <a href="#">List & Manage Products</a>
        </div>
      </div>
      <div className="secondpage">
        <div className="highprofit">
          <h3>HIGH PROFIT</h3>
          <div className="imageshighprofit">
            <Items image="image1.webp"  name='Gray 3pc Travel Luggage Set 24" Check Bag, 22" Duffel, & Boarding Tote' price='$50' className='images1' />
            <Items image="image2.webp"  name='Electric Warming Tray with Adjustable Temperature Control' price='$60' className='images1' />
            <Items image="image3.webp"  name='4 Drawers Metal Frame Storage Cart Rolling Bin Trolley, Black' price='$70' className='images1'/>
            
          </div>
        </div>
        <div className="highprofit">
          <h3>TOP SELLERS</h3>
          
          <div className="imageshighprofit">
          <Items image="image4.webp"  name='Oversized Couch Modern Living Room Sofa with 26.77 Inch Deep Seat' price='$70' className='images1' />
          <Items image="image5.webp"  name='Ergonomic Gaming Chair, Comfortable Computer Chair for Heavy People' price='$80' className='images1' />
          <Items image="image6.webp"  name='VEVOR Beach Carts for Sand, 23" x 15" Cargo Deck, w/ 13" TPU Balloon Wheels' price='$90' className='images1'/>
          </div>
        </div>
      </div>
      <div className="thirdpage">
        <div className="blowoutsale">
          <h3 style={{ fontFamily: 'cursive', display: 'flex', gap: '20px', cursor: 'pointer', marginTop: '20px', paddingTop: '20px' }}>
            <span style={{ marginLeft: '20px' }}>BLOWOUT</span> <span style={{ color: 'rgb(231, 18, 53)' }}>SALE</span> <span>56%</span> <span style={{ color: 'rgb(231, 18, 53)' }}>OFFER</span>
          </h3>
          <div className="imageshighprofit">
          <Items image="image7.webp"  name='Dew Droplets 20 LED Solar Lights Falling Like Dew' price='$100' className='images2' />
          <Items image="image8.webp"  name='All Seasons Yoga Shorts Stretchable With Phone Pocket' price='$110' className='images2'/>
          <Items image="image9.webp"  name='EverGlow WaterProof Pouch For Your Smartphone And Essentials' price='$120' className='images2'/>
          <Items image="image10.webp"  name='10 in 1 Unisex Home Fitness Bands' price='$120' className='images2' />
          <Items image="image11.webp"  name='Speedy Mag Wireless Charger for iPhone' price='$120' className='images2' />
          <Items image="image12.webp"  name='VEVOR Tailgate Pad for Bikes, Tailgate Protection Cover Carries UP to 5 Mountain Bikes' price='$120' className='images2' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
