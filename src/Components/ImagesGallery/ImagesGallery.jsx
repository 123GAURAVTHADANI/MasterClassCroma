import { useNavigate } from "react-router";

function ImageGallery() {
  const navigate = useNavigate();

  const handleClick = (type) => {
    switch (type) {
      case "mobile":
        navigate("/mobile");
        break;
      case "television":
        navigate("/television");
        break;
    }
  };
  return (
    <div className="grid__container">
      <img
        onClick={async () => await handleClick("mobile")}
        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746332/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Mobile_sdtrdf.png?tr=w-1024"
      />

      <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729680688/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/Desktop_wbgsf2.png?tr=w-1024" />
      <img
        onClick={async () => await handleClick("television")}
        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/TV_vdemgc.png?tr=w-1024"
      />
      <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746331/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Laptops_pzewpv.png?tr=w-1024" />
      <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746332/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Mobile_sdtrdf.png?tr=w-1024" />
      <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729680688/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/Desktop_wbgsf2.png?tr=w-1024" />
      <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/TV_vdemgc.png?tr=w-1024" />
    </div>
  );
}
export default ImageGallery;
