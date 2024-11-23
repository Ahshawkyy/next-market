import "./globals.css";
import {Roboto} from "next/font/google"; 

const Robotoo = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Home Page",
  description: "Description for home page",
  icons:{icon:"./images/bag-shopping-solid.svg"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={Robotoo.className}>
        {children}
      </body>
    </html>
  );
}
