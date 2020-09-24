import ImageServiceResponse from '../domains/ImageServiceResponse';
import Image from '../domains/Image';


export const parseImages = (image: ImageServiceResponse): Image => {
  return ({
    mediumURL: image.medium_url,
    originalURL: image.original_url,
    screenLargeURL: image.screen_large_url,
    screenURL: image.screen_url,
    superURL: image.super_url,
    thumbURL: image.thumb_url,
    tinyURL: image.tiny_url,
    iconURL: image.icon_url
  });
};
