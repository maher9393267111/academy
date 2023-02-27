import { Cutive_Mono, Poppins } from "@next/font/google";
import Blogs from "@/components/Blogs";
import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Layout from "@/components/Layout";
import Link from "next/link";

const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  subsets: ["latin"],
  weight: ['400']
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export default function Home({ data }) {
  return (
    <div className={`${cutiveMono.variable} ${poppins.variable}`}>
      <Layout>

   
      <div className="banner-area banner-area-3 bg-black">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-10">
                    <div className="thumb b-animate-thumb">
                        <img src="assets/img/banner/3.png" alt="img"/>
                    </div>
                </div>
                <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
                    <div className="banner-inner style-white text-center text-lg-left">
                        <h6 className="b-animate-1 banner-btn">PLACE TO GROW</h6>
                        <h1 className="b-animate-2 title">We creating leaders for tomorrow</h1>
                        <a className="btn btn-base b-animate-3 mr-sm-3 mr-2" href="blog.html">Get A Quote</a>
                        <a className="btn btn-border-white b-animate-3" href="blog.html">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>





        {/* <h1 className="md:text-6xl text-4xl pl-4 py-12 px-12 md:px-24 font-poppins font-semibold capitalize">Welcome to nextjs blogs 💖</h1> */}
        <Blogs blogs={data} />
        <Link href={'/blogs'} className="w-full flex justify-end text-base font-poppins px-14 pb-5">See more</Link>
      </Layout>
    </div>
  );
}



export async function getStaticProps() {
  const data = [];

  try {
    const querySnapshot = await getDocs(query(collection(db, 'blog'), orderBy('index', 'asc')));

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}