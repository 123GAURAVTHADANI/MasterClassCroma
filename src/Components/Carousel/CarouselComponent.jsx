import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselComponent() {
  return (
    <Carousel infiniteLoop showStatus={false} showIndicators={false}>
      <div>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1731047364/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Nov/08112024/HP_Rotating_Winter_6Nov2024_dvd5nc.jpg" />
      </div>
      <div>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1732338203/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Nov/23112024/HP_Rotating_ps5_23Nov24_iegkiq.jpg" />
      </div>
      <div>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1732266873/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Nov/23112024/Desktop/HP_Rotating_Ref_23Nov24_smhqt9.jpg" />
      </div>
    </Carousel>
  );
}
export default CarouselComponent;
