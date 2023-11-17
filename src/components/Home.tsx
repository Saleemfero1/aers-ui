import { Box, Typography } from "@mui/material";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.home}>
      <Box className={styles.bgCitySet}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,192L6.2,186.7C12.3,181,25,171,37,160C49.2,149,62,139,74,122.7C86.2,107,98,85,111,74.7C123.1,64,135,64,148,64C160,64,172,64,185,80C196.9,96,209,128,222,149.3C233.8,171,246,181,258,176C270.8,171,283,149,295,160C307.7,171,320,213,332,208C344.6,203,357,149,369,144C381.5,139,394,181,406,192C418.5,203,431,181,443,181.3C455.4,181,468,203,480,192C492.3,181,505,139,517,133.3C529.2,128,542,160,554,149.3C566.2,139,578,85,591,101.3C603.1,117,615,203,628,224C640,245,652,203,665,176C676.9,149,689,139,702,144C713.8,149,726,171,738,202.7C750.8,235,763,277,775,288C787.7,299,800,277,812,272C824.6,267,837,277,849,261.3C861.5,245,874,203,886,165.3C898.5,128,911,96,923,74.7C935.4,53,948,43,960,80C972.3,117,985,203,997,218.7C1009.2,235,1022,181,1034,176C1046.2,171,1058,213,1071,202.7C1083.1,192,1095,128,1108,112C1120,96,1132,128,1145,160C1156.9,192,1169,224,1182,234.7C1193.8,245,1206,235,1218,208C1230.8,181,1243,139,1255,149.3C1267.7,160,1280,224,1292,240C1304.6,256,1317,224,1329,202.7C1341.5,181,1354,171,1366,186.7C1378.5,203,1391,245,1403,229.3C1415.4,213,1428,139,1434,101.3L1440,64L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path>
        </svg>
      </Box>
      <Box className={styles.content}>
        <Box className={styles.contentContainer}>
          Natural Way of Cooling Get relief from Scroching heat and discomfort
          at affordable price with bare minimum electricity bills. Aers offers
          cooling solutions using water, and natual way of cooling, just like
          large water body, ponds and lakes. Explore our product categories to
          select a suitable product as per your needs and based on the
          description provided, and give us a chance to serve you with our best
          quality products.
        </Box>
        <Box className={styles.NameContainer}>
          <span className="ceiling-container">
            <span className="ceiling-fan horizontal left"></span>
            <span className="ceiling-fan horizontal right"></span>
            <span className="ceiling-fan vertical rotated top"></span>
            <span className="ceiling-fan vertical rotated bottom"></span>
          </span>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
