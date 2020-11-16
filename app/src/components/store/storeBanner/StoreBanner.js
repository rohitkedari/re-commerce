import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'grommet/components/Carousel';

/*style*/ import './StoreBanner.module.scss';
import ImageLazyLoader from 'components/common/imageLazyLoader/ImageLazyLoader';

//import { ImageLazyLoader } from 'components/common';

class StoreBanner extends Component {
    constructor () {
        super ();
    }
    render () {
        const {
            bannerList
        } = this.props;
        const hasBanners = bannerList && bannerList.length > 1;
        const sliderSettings = {
            dots: false,
            autoPlay: hasBanners,
            autoPlaySpeed: 5000,
            infinite: hasBanners,
            arrows: hasBanners
        };
        return (
            <div className='ps-store-banner'>
                <Carousel autoplay={true}>
                    {
                        bannerList.map((banner, index) => (
                            <div className='banner-item' key={banner.id}>                            
                                <ImageLazyLoader src={banner.img} 
                                    preLoader='{()=><Spinning/>}'>
                                    <span className='secondary-text'>{banner.name} image</span>
                                </ImageLazyLoader>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        )
    }
}

StoreBanner.PropTypes = {
    bannerList: PropTypes.object.isRequired
}

export default StoreBanner;