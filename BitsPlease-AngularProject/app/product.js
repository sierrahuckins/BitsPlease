"use strict";
var nextId = 5;
var Product = (function () {
    function Product(name, properties, id, type) {
        this.name = name;
        this.properties = properties;
        this.id = id;
        this.type = type;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map