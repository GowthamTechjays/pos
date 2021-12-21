/* eslint-disable linebreak-style */
/* eslint-disable function-paren-newline */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import PrimaryButton from 'src/app/components/Button/PrimaryButton';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Footer from './Components/Footer';
import Header from './Components/Header';

import styles from './SalesHubSite.module.css';

const SalesHubSite = () => (
  <div className="">
    <Header />
    <div className={styles.headBg}>
      <div className={styles.bannerTxtWrap}>
        <h1 className={styles.headerTxt}>
          Welcome to your Security operations Sales Hub
        </h1>
        <div className={styles.subHeaderTxt}>
          We&apos;ve curated thid content for you to learn more about zero
          trust, edge security, and hybrid IT
        </div>
      </div>
    </div>
    <div className={styles.centerContentWrap}>
      <div className={styles.accEngagementWrap}>
        <div className={styles.accHead}>
          <h3>Account Engagements</h3>
          <PrimaryButton>Create Account</PrimaryButton>
        </div>
        <div />
      </div>
      <div className={styles.recommendHeadTxt}>Recommended content for you</div>
      <div className={styles.cardWrap}>
        <Card sx={{ maxWidth: 400 }} className={styles.bannerCard}>
          <CardMedia
            component="img"
            height="265"
            image="https://d1wjau4dvmc4kc.cloudfront.net/media/public/assets/files/file_189.jfif"
            alt="green iguana"
          />
          <CardContent>
            <h4>Retail Data Lake</h4>
            <div>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nam blandit
              add ultrices.Lorem ipsum sit amet, consecte adipiscing elit.
              blandit ultrices ipsum dolor sit amet, consecte
            </div>
            <div className={styles.loadLink}>{`Load More ${`>`}`}</div>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400 }} className={styles.bannerCard}>
          <CardMedia
            component="img"
            height="265"
            image="https://d1wjau4dvmc4kc.cloudfront.net/media/public/assets/files/file_189.jfif"
            alt="green iguana"
          />
          <CardContent>
            <h4>Retail Data Lake</h4>
            <div>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nam blandit
              add ultrices.Lorem ipsum sit amet, consecte adipiscing elit.
              blandit ultrices ipsum dolor sit amet, consecte
            </div>
            <div className={styles.loadLink}>{`Load More ${`>`}`}</div>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 400 }} className={styles.bannerCard}>
          <CardMedia
            component="img"
            height="265"
            image="https://d1wjau4dvmc4kc.cloudfront.net/media/public/assets/files/file_189.jfif"
            alt="green iguana"
          />
          <CardContent>
            <h4>Retail Data Lake</h4>
            <div>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Nam blandit
              add ultrices.Lorem ipsum sit amet, consecte adipiscing elit.
              blandit ultrices ipsum dolor sit amet, consecte
            </div>
            <div className={styles.loadLink}>{`Load More ${`>`}`}</div>
          </CardContent>
        </Card>
      </div>
    </div>
    <Footer />
  </div>
);

export default SalesHubSite;
