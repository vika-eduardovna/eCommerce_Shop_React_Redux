import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadAllProducts } from '../../store/asyncActions/products'
import Spinner from '../Spinner'
import Card from '../Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import s from './style.module.sass'

export default function PromoContainer() {
  const state = useSelector(state => state.all_products);
  const dispatch = useDispatch();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  useEffect(() => {
    dispatch(loadAllProducts())
  }, []);

  return (
    <section>
      <div className='wrapper'>
        <div className={s.categ_box}>
          <h3>Promotions</h3>
          <button>All promotions</button>
        </div>
        <div className='wrapper'>
          <Carousel
            className={s.container}
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
            {
              state.length === 0
                ? <Spinner />
                : state.slice(0, 10).map(el => <Card key={el.id} {...el} />)
            }
          </Carousel>
        </div>

      </div>
    </section>
  )
}
