    import { PRODUCTS_DATA} from "../store/CartStore";
    import ProductBlock from "./ProductBlock";

    const Products = () => {
    return (
        <main>
        <div className="container mx-auto mt-10">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {PRODUCTS_DATA.map((item) => {
                return <ProductBlock key={item.id} product={item} />;
            })}
            </ul>
        </div>
        </main>
    );
    };

    export default Products;
