import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      title: "Apple iPhone 15",
      price: "₹79,999",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    },
    {
      id: 2,
      title: "MacBook Air",
      price: "₹1,14,999",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500",
    },
    {
      id: 3,
      title: "Sony Headphones",
      price: "₹9,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 4,
      title: "Smart Watch",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 5,
      title: "Gaming Keyboard",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500",
    },
    {
      id: 6,
      title: "Wireless Mouse",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">amazon</h2>

        <input
          type="text"
          placeholder="Search Amazon"
          className="search"
        />

        <div className="menu">
          <div>
            <small>Hello, Sign In</small>
            <h4>Account</h4>
          </div>

          <div>
            <small>Returns</small>
            <h4>& Orders</h4>
          </div>

          <div>
            <h4>🛒 Cart</h4>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1600"
          alt="Amazon Banner"
        />
      </div>

      {/* Products */}
      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p className="price">{product.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;