const Product = require('./model/product')
class FakeDb{
  constructor(){
    this.products = [
      {
        name:'カリカリ',
        weight:'10g',
        coverImage:'./assets/img/phone-cover.jpg'
      },
      {
        name:'かつおさん',
        weight:'20g',
        coverImage:'./assets/img/placeholder.png'
      },
      {
        name:'缶詰',
        weight:'',
        coverImage:'./assets/img/phone-cover.jpg'
      },
      {
        name:'ちゅ～る',
        weight:'5g',
        coverImage:'./assets/img/phone-cover.jpg'
      }

    ]

  }

  async initDb(){
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb(){
    await Product.deleteMany({})
  }

  pushProductsToDb(){
    this.products.forEach(
      (product)=>{
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
/*       // ドキュメントの作成
      var product = new Product(
        {
          name:'カリカリ',
          weight:'10g',
          coverImage:'./assets/img/phone-cover.jpg',
        }
      );

      // ドキュメントの保存
      product.save(function(err) {
        if (err) throw err;
      }); */
  }

/*   seeDb(){
    this.pushProductsToDb()
  } */
}

module.exports = FakeDb

