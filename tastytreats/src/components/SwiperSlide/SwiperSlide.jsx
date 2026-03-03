

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMasterClasses } from "../../redux/operations";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  SwiperContainer,
  SmallCard,
  LargeCard,
  Image,
  Overlay,
  Content,
  BigImage,

} from "./SwiperSlide.styled";

export const RecipeSwiper = () => {
  const dispatch = useDispatch();
  const { items = [], isLoading, error } = useSelector(
    (state) => state.events
  );

  useEffect(() => {
    dispatch(findMasterClasses());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Масив всіх карток у правильному порядку
  const slides = [];
  items.forEach((obj) => {
    slides.push({
      type: "small",
      src: obj.cook?.imgWebpUrl,
      alt: obj.cook?.name,
    });
    slides.push({
      type: "large-text",
      src: obj.topic?.previewWebpUrl,
      alt: obj.topic?.name,
      name: obj.topic?.name,
      area: obj.topic?.area,
    });
    slides.push({
      type: "large",
      src: obj.topic?.imgWebpUrl,
      alt: obj.topic?.name,
    });
  });

  return (
    <SwiperContainer>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={"auto"}
        spaceBetween={24}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "small" && (
              <SmallCard>
                <Image src={slide.src} alt={slide.alt} />
              </SmallCard>
            )}

            {slide.type === "large-text" && (
              <LargeCard>
                <Image src={slide.src} alt={slide.alt} />
                <Overlay />
                <Content>
                  <h3>{slide.name}</h3>
                  <p>{slide.area}</p>
                </Content>
              </LargeCard>
            )}

            {slide.type === "large" && (
              <LargeCard>
                <BigImage src={slide.src} alt={slide.alt} />
              </LargeCard>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};