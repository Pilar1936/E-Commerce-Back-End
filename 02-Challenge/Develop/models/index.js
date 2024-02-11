// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define associations
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Assuming you have a foreign key named category_id in the Product table
  onDelete: 'CASCADE' // Optional: define the onDelete behavior
});

Category.hasMany(Product, {
  foreignKey: 'category_id' // Assuming you have a foreign key named category_id in the Product table
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // Assuming you have a foreign key named product_id in the ProductTag table
  otherKey: 'tag_id', // Assuming you have a foreign key named tag_id in the ProductTag table
  onDelete: 'CASCADE' // Optional: define the onDelete behavior
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', // Assuming you have a foreign key named tag_id in the ProductTag table
  otherKey: 'product_id' // Assuming you have a foreign key named product_id in the ProductTag table
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
