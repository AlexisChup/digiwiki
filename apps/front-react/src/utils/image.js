export const safeSrcImg = (imgUrl, origin) => {
  if (!imgUrl) {
    return require(`../assets/png/common/default.png`);
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
      imgFromUrl = require(`../assets/png/${origin}/${imgUrl}.png`);
      isImgExist = true;
    } catch (error) {
      console.log("No image for url: ", imgUrl);
    }

    if (isImgExist) {
      return imgFromUrl;
    } else {
      return require(`../assets/png/common/default.png`);
    }
  } else if (origin === "tools") {
    if (isImage(imgUrl)) {
      return imgUrl;
    } else {
      return require(`../assets/png/common/default.png`);
    }
  } else {
    return require(`../assets/png/common/default.png`);
  }
};

export const isImage = (url) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};
