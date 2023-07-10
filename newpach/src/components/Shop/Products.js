import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUM = [
  {
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
    id: "p1",
  },
  {
    title: "Test2",
    price: 5,
    description: "This is a second product - amazing!",
    id: "p2",
  },
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUM.map((item) => 
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
            key={item.id}
            id={item.id}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
