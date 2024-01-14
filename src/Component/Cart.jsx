import React ,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";

function Cart() {
 
    const products = [
        {
          id: 1,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        },
        {
          id: 2,
          title: "iPhone X",
          description:
            "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          price: 899,
          discountPercentage: 17.94,
          rating: 4.44,
          stock: 34,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        },
        {
          id: 3,
          title: "Samsung Universe 9",
          description:
            "Samsung's new variant which goes beyond Galaxy to the Universe",
          price: 1249,
          discountPercentage: 15.46,
          rating: 4.09,
          stock: 36,
          brand: "Samsung",
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        },
        {
          id: 4,
          title: "OPPOF19",
          description: "OPPO F19 is officially announced on April 2021.",
          price: 280,
          discountPercentage: 17.91,
          rating: 4.3,
          stock: 123,
          brand: "OPPO",
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        },
        {
          id: 5,
          title: "Huawei P30",
          description:
            "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          price: 499,
          discountPercentage: 10.58,
          rating: 4.09,
          stock: 32,
          brand: "Huawei",
          category: "smartphones",
          thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        },
      ];

      const [productCounts, setProductCounts] = useState(products.map(() => 1));

  
  
    const handleDecrement = (index) => {
      const newCounts = [...productCounts];
      newCounts[index] = Math.max(newCounts[index] - 1, 1); // Ensure count doesn't go below 1
      setProductCounts(newCounts);
    };
  
    const handleIncrement = (index) => {
      const newCounts = [...productCounts];
      newCounts[index] += 1;
      setProductCounts(newCounts);
    };

 
      const calculateSubtotal = () => {
        let subtotal = 0;
        products.forEach((product, index) => {
          subtotal += product.price * productCounts[index];
        });
        return subtotal;
      };

  
  return (
    <>
      <div className="container padding-bottom-3x mb-1">
        <div className="table-responsive shopping-cart">
          <table className="table">
            <thead>
              <tr>
              
                <th>Product Name</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Subtotal</th>
               
              </tr>
            </thead>
            <tbody>
              {products.map((e, index) => {
                return (
                  <>
                    <tr key={e.id}>
                    
                      <td>
                        <div className="product-item">
                          <a className="product-thumb" href="#">
                            <img src={e.thumbnail} alt="Product" />
                          </a>
                          <div className="product-info">
                            <h4 className="product-title">
                              <a href="#">{e.title}</a>
                            </h4>
                            <span>
                              <em>Brand:</em> {e.brand}
                            </span>
                            <span>
                              <em>Stock:</em> {e.stock}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="count-input">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleDecrement(index)}
                          >
                            -
                          </button> 
                          <button>{productCounts[index]}</button>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleIncrement(index)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-center text-lg text-medium">
                      ${e.price * productCounts[index]}
                      </td>

                      
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="shopping-cart-footer">
          <div className="column text-lg">
            Subtotal: <span className="text-medium">${calculateSubtotal()}</span>
          </div>
        </div>
        <div className="shopping-cart-footer">
          <div className="column">
            <Link className="btn btn-outline-secondary" to="/">
              <i className="icon-arrow-left"></i>&nbsp;Back to Shopping
            </Link>
          </div>
          <div className="column">
            <a className="btn btn-success" href="#">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
