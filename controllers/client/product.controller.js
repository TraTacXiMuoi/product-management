// [GET] /products/
module.exports.index = (req, res) => {
  res.render("client/pages/products/index", {
    pageTitle: "Danh sách sản phẩm"
  });
}

// // [GET] /products/detail
// module.exports.detail = (req, res) => {
//   res.send("Trang chi tiết sản phẩm");
// }

// // [GET] /products/edit
// module.exports.edit = (req, res) => {
  
// }

// // [GET] /products/create
// module.exports.create = (req, res) => {
  
// }