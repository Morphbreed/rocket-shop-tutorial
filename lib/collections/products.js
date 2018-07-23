Products = [
  {
    "sku": "illudium-q36",
    "name": "Illudium Q-36 Explosive Space Modulator",
    "image": "illudium-q36.jpg",
    "summary": "Need to destroy a planet?",
    "description": "Description Text",
    "price": 4995,
    "vendor": {
      "id": 1,
      "slug": "martian-armaments",
      "name": "Martian Armaments, Ltd"
    }
  },
  {
    "sku": "honeymoon-mars",
    "name": "Honeymoon on Mars",
    "image": "honeymoon-mars.jpg",
    "summary": "Tired of boring wedding pictures?",
    "description": "Description Text",
    "price": 2995,
    "vendor": {
      "id": 1,
      "slug": "martian-armaments",
      "name": "Martian Armaments, Ltd"
    }
  }
]

Products.featured = function() {
  var featuredSkus = ["illudium-q36", "honeymoon-mars"];
  return _.filter(Products, function(product) {
    return featuredSkus.indexOf(product.sku) > -1;
  })
}

Products.findOne = function(args) {
  return _.find(Products, function(product) {
    return product.sku === args.sku;
  });
}