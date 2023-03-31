import classes from "./Events.module.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Events() {
  return (
    <div className={classes.events}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Events and Activities
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          //   className="mySwiper"
        >
          <SwiperSlide className={classes.slide1}>
            <div>
              <p>
                Inter Socieities Quiz Competition 2023 organized by IUBSPS at
                Ghotvi Hall, Abbassia Campus
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide2}>
            <div>
              <p>
                Winner team of Inter Society Quiz Competition receiving the
                trophy from the cheif guests
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide3}>
            <div>
              <p>
                Cabinet of term 2023 visiting the Material Chemistry Lab with
                Advisor Professor Dr. Maqsood Ahmad
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide4}>
            <div>
              <p>
                Male Cabinet of IUB Science Promotion Society 2022 at the end of
                the term outside Main Auditorium BJC
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide5}>
            <div>
              <p>
                A walk on breast cancer awareness held at Khawaja Fareed Campus
                organized by IUBSPS term 2022
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide6}>
            <div>
              <p>
                Female Cabinet of IUB Science Promotion Society 2022 with then
                advisor Dr. Qaiser Jabeen, outside Kamyaab Jawaan Markaz
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide7}>
            <div>
              <p>
                An event on research ethics and scientific writing organized by
                IUBSPS term 2022
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.slide8}>
            <div>
              <p>
                At the eve of Inter Society Sports Competition 2022 at Abbasia
                Campus Sports Ground
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}
