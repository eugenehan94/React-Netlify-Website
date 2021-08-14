import "../css/Categories.css";
import categoryPics from "./CategoryPics";
const Categories = ({ categories, filtering, fullMenu, selected }) => {
  console.log(categoryPics[0]);
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="button-reset-container">
        <button
          className="Mcdonald-cat-button"
          type="button"
          onClick={() => fullMenu()}
        >
          View Temporary Limited Menu
        </button>
      </div>
      <div className="button-container">
        {categories.map((item, id) => {
          return (
            <div
              key={id}
              style={{ backgroundColor: "white" }}
              className={
                item === selected ? "active_choice" : "Mcdonald-cat-button"
              }
            >
              <button
                type="button"
                className={
                  item === selected ? "active_bold" : "Mcdonald-cat-button"
                }
                onClick={() => filtering(item)}
              >
                <img src={categoryPics[id]} alt={item.title} />

                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
