export default defineSitemapEventHandler(async () => {
  // fetch data directly in the correct type
  const dynamicUrls = [
    {
      "location": "/en/about",
      "lastmod": "2023-03-31T09:50:10.371245Z"
    },
    {
      "location": "/de/uber-uns",
      "lastmod": "2023-03-31T08:55:38.634985Z"
    },
    {
      "location": "/nl/over-ons",
      "lastmod": "2023-03-31T08:55:38.634985Z"
    },
    {
      "location": "/fr/sur-nous",
      "lastmod": "2023-03-31T08:55:38.634985Z"
    },
    {
      "location": "/en/projects",
      "lastmod": "2023-03-31T08:55:38.634985Z"
    },
    {
      "location": "/de/projekten",
      "lastmod": "2023-03-31T08:55:38.634985Z"
    },
    {
      "location": "/nl/projecten",
      "lastmod": "2023-03-31T08:55:38.634985Z"
    },
    {
      "location": "/fr/projets",
      "lastmod": "2023-03-31T08:55:38.634985Z"
    },
  ]

  return [
    ...dynamicUrls.map(p => asSitemapUrl({
      loc: p.location,
      lastmod: p.lastmod,
    })),
  ]
})
