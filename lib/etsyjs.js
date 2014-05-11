(function() {
  var etsyjs;

  etsyjs = module.exports = {
    client: require('./etsyjs/client'),
    auth: require('./etsyjs/auth'),
    shop: require('./etsyjs/shop'),
    category: require('./etsyjs/category'),
    user: require('./etsyjs/user'),
    search: require('./etsyjs/search'),
    listing: require('./etsyjs/listing')
  };

}).call(this);