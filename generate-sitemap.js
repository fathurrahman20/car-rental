const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const hostname = "https://binar-car-rental-k1.vercel.app/";
const stream = new SitemapStream({ hostname });
const fs = require("fs");

const urls = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/cart", changefreq: "monthly", priority: 0.8 },
  { url: "/e-ticket", changefreq: "monthly", priority: 0.8 },
  { url: "/admin", changefreq: "monthly", priority: 0.8 },
];

// Return a promise that resolves with your XML string
return streamToPromise(Readable.from(urls).pipe(stream)).then((data) =>
  fs.writeFileSync("./public/sitemap.xml", data.toString())
);
