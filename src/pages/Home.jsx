import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
// importing the banner img link as component/constant
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage: `url(${Banner})`}}>
          <div className="headerContainer">
            <h1>Food Website</h1>
            <p>Best Foods in India</p>
            <Link to={"/menu"}>
              <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home