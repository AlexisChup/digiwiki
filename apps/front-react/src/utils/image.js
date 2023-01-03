export const safeSrcImg = (imgUrl, origin) => {
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
};
