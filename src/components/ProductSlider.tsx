import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./Product.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

type Product = {
  name: string;
  description: string;
  image: string;
  bgColor: string;
  flexDirection: string;
};

type Props = {
  products: Product[];
};

export default function ProductSlider({ products }: Props) {
  return (
    <Swiper spaceBetween={20} slidesPerView={1} autoplay={{ delay: 3000 }}>
      {products.map((product, index) => (
        <SwiperSlide>
          <Box
            className={styles.product}
            sx={{
              backgroundColor: product.bgColor,
              flexDirection: product.flexDirection,
            }}
          >
            <Box className={styles.productImageConatiner}>
              <img src={product.image} alt="Cooler" className="src" />
            </Box>
            <Box className={styles.productInformation}>
              <Box className={styles.productName}>{product.name}</Box>
              <Box className={styles.productDescroption}>
                {product.description}
              </Box>
              <Box className={styles.discoverButtonBox}>
                <Button variant="contained">Discover More</Button>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
