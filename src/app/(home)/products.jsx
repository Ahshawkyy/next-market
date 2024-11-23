import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from 'next/image'
// const productss = [
//   {
//     id: 1,
//     productName: "Majestic Mountain Graphic ",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elite. ",
//     price: 180,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730593243/mtzfuuybxg1231xxlzmz.jpg",
//   },
//   {
//     id: 2,
//     productName:"Classic Red Pullover Hoodie",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elite. ",
//     price: 230,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730593248/yvzbtcmbsdthlpxjksgg.jpg",
//   },
//   {
//     id: 3,
//     productName: "Classic Heather Gray Hoodie",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elite. ",
//     price: 300,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730593244/fjfjeu6dd8twljzy0b2d.jpg",
//   },
//   {
//     id: 4,
//     productName: "Classic Grey Hooded ",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elite. ",
//     price: 500,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730593247/pjfjkxirb5jcuxnnqbms.jpg",
//   },
//   {
//     id: 5,
//     productName: "Classic Comfort Fit Joggers ",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 150,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730593244/jmgc4k51nfp6hy5oacq2.jpg",
//   },
//   {
//     id: 6,
//     productName: "Classic Red Jogger ",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 370,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730593242/esqjc5mbiupqrjamjyav.jpg",
//   },
//   {
//     id: 7,
//     productName: "Classic Watch for you ",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 530,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730592977/samples/ecommerce/analog-classic.jpg",
//   },
//   {
//     id: 8,
//     productName: "Classic Blue Baseball Cap",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 50,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730593248/kjatfhenmbabi0jzw3n8.jpg",
//   },
//   {
//     id: 9,
//     productName: "Black Short",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 170,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730593248/rdpymqpglq5pefsgxq1h.png",
//   },
//   {
//     id: 10,
//     productName: "White Sneakers",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 310,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730592984/samples/shoe.jpg",
//   },
//   {
//     id: 11,
//     productName: "New White Shoses ",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 200,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730592989/cld-sample-5.jpg",
//   },
//   {
//     id: 12,
//     productName: "Purple Joggers ",
//     description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 340,
//     imageLink: "https://res.cloudinary.com/dn2fdxtad/image/upload/v1730592978/samples/ecommerce/shoes.png",
//   },

// ];

// async function products() {
//   let data = await fetch('https://fakestoreapi.com/products')
//   let posts = await data.json()
//   return (
//     <section className="products flex">

//     {posts.map((item)=>{
//       return(

//         <article key={item.id} className="card">
//         <a href="/pages/product-details.html">
//           <img

//             src={item.image}
//             alt={item.productName}
//             className="product-img"
//           />
//         </a>
//         <div style={{ width: 266 }} className="content">
//           <h1 className="title">{item.title.slice(0, 20)}...</h1>
//           <p className="description">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus corrupti rem consectetur quis eveniet sunt odio voluptates,
//           </p>
//           <div
//             className="flex"
//             style={{
//               justifyContent: "space-between",
//               paddingBottom: "0.7rem",
//             }}
//           >
//             <div className="price">$ {item.price}</div>
//             <button className="add-to-cart flex">
//               <FontAwesomeIcon
//                 icon={faCartPlus}
//                 style={{
//                   width: "0.8rem",
//                   marginRight: "0.3rem",
//                 }}
//                 className="fa-solid fa-cart-plus"
//               />
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       </article>

//       )
//     })}

//   </section>
//   )
// }

// export default products

async function getData() {
  const res = await fetch("http://localhost:4000/products", {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Products = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const arrData = await getData();
  return (
    <section className="products flex">
      {arrData.map((item) => {
        return (
          <article title={item.title} key={item.id} className="card">
            <Link href={`/product-details/${item.id}`}>
              <Image
                src={item.imageLink}
                alt="Picture of the author"
                // className="product-img"
                width={266}
                height={266}
              />
            </Link>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">{item.productName.slice(0, 20)}...</h1>
              <p className="description">{item.description.slice(0,100)}...</p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">$ {item.price}</div>
                <button className="add-to-cart flex">
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    style={{
                      width: "0.8rem",
                      marginRight: "0.3rem",
                    }}
                    className="fa-solid fa-cart-plus"
                  />
                  Add To Cart
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
