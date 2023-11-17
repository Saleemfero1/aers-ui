import styles from "./Product.module.css";
import { Box, Typography } from "@mui/material";
import ProductSlider from "./ProductSlider";

const productData = [
  {
    name: "CooLiT S1",
    description:
      "Personal Cooler/ Spot Cooling Requirements suitable for shops, desks/couter, study table, dining table etc capacity 2 liters offers cooling for 2.5-3 hrs",
    image: "image/cooler.png",
    bgColor: "ghostwhite",
    flexDirection: "row",
  },
  {
    name: "CooLiT S2",
    description:
      "Small Space Cooler designed for small room upto 15'x15', living rooms, bed rooms, kitchen and more",
    image: "image/cooler.png",
    bgColor: "white",
    flexDirection: "row-reverse",
  },
  {
    name: "CooLiT S3",
    description:
      "Space Cooling/ Room Cooling / Customisatble as Heat Load and Application; applicable for Big rooms, Halls, Living rooms, OutDoor Applications, Dry Cooling available ",
    image: "image/cooler.png",
    bgColor: "whitesmoke",
    flexDirection: "row",
  },
];
const Products: any = () => {
  return (
    <div className={styles.productBox}>
      <Box className={styles.productHeader}>
        Our Products
        <Typography className={styles.tab}> </Typography>
      </Box>
      <ProductSlider products={productData}></ProductSlider>
    </div>
  );
};

export default Products;
