export const safeSrcImg = (imgUrl, origin) => {
  if (!imgUrl) {
    return require(`../assets/webp/common/default.webp`);
  }

  if (
    origin === "categories" ||
    origin === "sub-categories" ||
    origin === "landingpage" ||
    origin === "logo"
  ) {
    let imgFromUrl = null;
    let isImgExist = null;

    try {
      imgFromUrl = require(`../assets/webp/${origin}/${imgUrl}.webp`);
      isImgExist = true;
    } catch (error) {
      console.log("No image for url: ", imgUrl);
    }

    if (isImgExist) {
      return imgFromUrl;
    } else {
      return require(`../assets/webp/common/default.webp`);
    }
  } else if (origin === "tools") {
    if (isImage(imgUrl)) {
      return imgUrl;
    } else {
      return require(`../assets/webp/common/default.webp`);
    }
  } else {
    return require(`../assets/webp/common/default.webp`);
  }
};

export const isImage = (url) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};
