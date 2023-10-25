import "./Banner.scss";
import BannerImg from "../../../assets/home_bg.webp";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>LATEST</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos facere saepe reiciendis fugit omnis quasi ad consequatur, a consequuntur quas?
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} />
      </div>
    </div>
  );
};

export default Banner;
