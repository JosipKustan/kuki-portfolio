import React from "react";
import ImageGallery from "react-image-gallery";
import { WorkConteiner } from "./WorkSectionElements";

const images = [
  {
    original:
      "https://res.cloudinary.com/josip-kuki/image/upload/v1618090226/Rainbowbib_zsilp1.png",
    thumbnail:
      "https://res.cloudinary.com/josip-kuki/image/upload/v1618090218/Rainbowbib_thumbnail_xmbtde.png",
  },
  {
    original:
      "https://res.cloudinary.com/josip-kuki/image/upload/v1618090225/Kresetina_xpifuu.jpg",
    thumbnail:
      "https://res.cloudinary.com/josip-kuki/image/upload/v1618090215/Kresetina_thumbnail_pmu8pv.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/josip-kuki/image/upload/v1618090216/RastovacPainting_vcl9qe.jpg",
    thumbnail:
      "https://res.cloudinary.com/josip-kuki/image/upload/v1618090214/RastovacPainting_thumbnail_viojql.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/josip-kuki/image/upload/v1618090220/DioramaRastovac_kxgmt5.jpg",
    thumbnail:
      "https://res.cloudinary.com/josip-kuki/image/upload/v1618090215/DioramaRastovac_thumbnail_xedcpz.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/josip-kuki/image/upload/v1618090218/Mushroom3_fv8dro.jpg",
    thumbnail:
      "https://res.cloudinary.com/josip-kuki/image/upload/c_thumb,w_200,g_face/v1618090218/Mushroom3_fv8dro.jpg",
  },
];

const WorkConteinerComponent = () => {
  return (
    <WorkConteiner id="work_page">
      <ImageGallery items={images} />
    </WorkConteiner>
  );
};

export default WorkConteinerComponent;
