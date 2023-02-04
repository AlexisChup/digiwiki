const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const { createWriteStream } = require("fs");
const axios = require("axios");

const AXIOS = axios.create({
  baseURL: "https://dw-back.herokuapp.com/api",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: ``,
  },
});

const generateSiteMap = () => {
  // An array with your links
  let links = [
    // static url
    { url: "/", changefreq: "monthly", priority: 1 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    { url: "/explorer", changefreq: "monthly", priority: 0.8 },
    { url: "/terms-of-service", changefreq: "monthly", priority: 0.8 },
    { url: "/privacy-and-cookies", changefreq: "monthly", priority: 0.8 },
  ];

  AXIOS.get("/public/category/all")
    .then((res) => {
      const categories = res.data;

      for (let iCat = 0; iCat < categories.length; iCat++) {
        const subCategories = categories[iCat].subCategories;

        links.push({
          url: "/explorer/" + categories[iCat].url,
          changefreq: "monthly",
          priority: 0.7,
        });

        for (let iSubCat = 0; iSubCat < subCategories.length; iSubCat++) {
          const tools = subCategories[iSubCat].tools;

          links.push({
            url:
              "/explorer/" +
              categories[iCat].url +
              "/" +
              subCategories[iSubCat].url,
            changefreq: "monthly",
            priority: 0.6,
          });

          for (let iTool = 0; iTool < tools.length; iTool++) {
            const tool = tools[iTool];

            links.push({
              url:
                "/explorer/" +
                categories[iCat].url +
                "/" +
                subCategories[iSubCat].url +
                "/" +
                tool.url,
              changefreq: "monthly",
              priority: 0.5,
            });
          }
        }
      }
    })
    .catch((e) => {
      console.log("ERROR generate sitemap: ", e);
    })
    .finally(() => {
      writeXMLSiteMap(links);
    });

  return links;
};

const writeXMLSiteMap = (linksXML) => {
  // Creates a sitemap object given the input configuration with URLs
  const sitemap = new SitemapStream({ hostname: "https://www.digiwiki.io" });
  const writeStream = createWriteStream("./public/sitemap.xml");
  sitemap.pipe(writeStream);

  for (let index = 0; index < linksXML.length; index++) {
    const link = linksXML[index];
    sitemap.write(link);
  }
  sitemap.end();
};

generateSiteMap();
