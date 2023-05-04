
//under the banner2
// import { AddProduct } from "./AddProduct"
export const ProductPreviewCard = ({ product, onAddProduct }) => {

  
const addProduct = () => {
        //To do: after setting up redux state for carts to add products there
        onAddProduct(product)
    }
    return (
        //bg black optional
        <div className="w-full  p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center bg-black">
            <img src={product.imageUrl} alt={product.name} />
            <h2 className="pb-2 text-lg" >{product.name}</h2>
            <p className="mb-2 h-20 line-clamp-4">{product.desciption}</p>
            {/* <AddProduct onAddProduct={addProduct} /> */}
            
        </div>
    )
}