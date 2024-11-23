import Footer from "components/footer/footer";
import Header from "components/header/header";
import "./product-details.css";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";

async function getData(iddd) {
  const res = await fetch(`http://localhost:4000/products/${iddd}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}



export async function generateMetadata({params}) {
const objData = await getData(params.id);
return{
  title: objData.productName,
  description: 'description for your product',
}


}






const Page = async ({ params }) => {
  const objData = await getData(params.id);

  return ( 
    <div className="style">
      <Header />
  <main style={{textAlign: 'center', flexWrap: 'nowrap'}} className="flex">
  <Image 
  width={300}
  height={300}
  alt="" src={objData.imageLink} />
  <div className="product-details">
    <div style={{justifyContent: 'space-between'}} className="flex">
      <h2>{objData.productName}</h2>
      <p className="price">$ {objData.price}</p>
    </div>
    <p className="description">
    {objData.description}
    </p>
    <button className="flex add-to-cart">
    <FontAwesomeIcon icon={faCartShopping}
            style={{
              width: "0.8rem" ,
              color: "white"
            
              
            }}
            className="fa-solid fa-cart-shopping"
            />      Add To Cart
    </button>
  </div>
</main>

      <Footer />
    </div>
  );
};

export default Page;
