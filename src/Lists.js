import "./styles.css";

const products = [
  { title: "Cabbage", amount: "2 heads", priority: "low"},
  { title: "Garlic", amount: "4 cloves", priority: "low" },
  { title: "Apple", amount: "3 lbs", priority: "high" },
  { title: "Bread", amount: "1 loaf", priority: "med" },
  { title: "Eggs", amount: "2 dozen", priority: "high" }];
const priorityLevels = ["high","med","low"];
const simpleView = true;

function ListItems() {
  const items = products.map((product) => (
    <li>{product.title} ({product.amount})</li>
  ));
  return items;
}

function ListByPriority(){
  const allCats = priorityLevels.map((priority) => (
    <div>
      <h2>{priority} priority</h2>
      <div>
        {products.map((product) => (
          <div>
          {product.priority == priority && <li>{product.title} ({product.amount})</li>}
          </div>
        ))}
      </div>
    </div>
  ));

  return allCats;
}

export default function MyList() {
  return (
    <p>
      <h1>Shopping list</h1>
      <div>
        {simpleView ? <ListItems /> : <ListByPriority />}
      </div>
    </p>
  );
}