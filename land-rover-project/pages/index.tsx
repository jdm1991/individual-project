import "../app/globals.css";
import Slider from "react-slick";
import Image from "next/image";
import Layout from "../pages/layout";
import "../pages/indexstyle.css";
import Link from "next/link";

export default function index() {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
  }

  const CarouselTile = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 10000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <Slider {...settings} className="max-w-[90%] w-full">
        <div className="flex justify-center items-center relative">
          <Image
            src="/Images/pic1.jpeg"
            alt="Pic1"
            width={500}
            height={500}
            className="w-96 h-60"
          />
          <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 font-semibold text-black p-4 box-border">
            Limited Edition Land Rover Defender 90 <br />
            Price: £85,000
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <Image
            src="/Images/pic2.jpeg"
            alt="Pic2"
            width={500}
            height={500}
            className="w-96 h-60"
          />
          <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 font-semibold text-black p-4 box-border">
            Custom Land Rover Defender 90 <br />
            Price: £120,000
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <Image
            src="/Images/pic3.webp"
            alt="Pic3"
            width={383}
            height={300}
            className="w-96 h-60"
          />
          <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 font-semibold text-black p-4 box-border">
            Limited Edition Land Rover Defender 110 <br />
            Price: £150,000
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <Image
            src="/Images/pic4.jpeg"
            alt="Pic4"
            width={383}
            height={300}
            className="w-96 h-60"
          />
          <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70 font-semibold text-black p-4 box-border">
            Limited Edition Land Rover Defender 110 <br />
            Price: £88,000
          </div>
        </div>
      </Slider>
    );
  };

  return (
    <>
      <Layout>
        <section className="relative bg-white h-[85vh] flex items-stretch overflow-hidden border-b-8 border-black">
          <div className="flex-1 flex justify-center overflow-hidden mb-20">
            <img
              src="https://smgmedia.blob.core.windows.net/images/129785/1920/land-rover-defender-90-suv-diesel-567ef2bf2583.jpg"
              alt=""
              className="w-full h-[60%] object-cover"
            />
          </div>
          <div className="flex-1 flex justify-center overflow-hidden mb-20">
            <img
              src="https://www.revogarage.com/wp-content/uploads/2020/07/DSC_4363-6.jpg"
              alt=""
              className="w-full h-[60%] object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full text-black bg-gray-100 bg-opacity-80 text-left py-8 px-12 text-4xl font-semibold border-b border-black border-opacity-20 backdrop-filter backdrop-blur-md">
            <h2 className="text-shadow-lg text-black font-['Exo_2'] font-bold text-6xl mb-4 tracking-wide">
              Going where other vehicles don't dare.
            </h2>
            <p className="text-2xl font-light mb-8 text-gray-700 max-w-2xl">
              The finest selection of Land Rover Defenders on offer in the
              United Kingdom today.
            </p>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-light">Priced from: £23,998</p>
              <Link href="/vehicles">
                <button className="bg-[#004225] rounded-full text-white border-none py-3 px-8 font-['Outfit'] text-base cursor-pointer transition duration-300 ease-in-out hover:bg-[#002d18] focus:outline-none focus:ring-2 focus:ring-[#004225] focus:ring-offset-2">
                  Explore the Range
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-white flex justify-center items-center text-center h-[50vh] mx-4">
          <div>
            <h2 className="text-5xl font-extralight mb-8">Our pledge to you</h2>
            <p>
              "At [Dealership Name], we are committed to delivering an
              unparalleled experience to enthusiasts of the iconic Land Rover
              Defender. Our mission is to curate and provide the highest
              quality, expertly restored and meticulously maintained selection
              of Land Rover Defenders. We are dedicated to preserving the rich
              heritage and formidable legacy of these exceptional vehicles while
              infusing them with modern luxury and bespoke customization that
              meet the individual desires of our discerning clientele. We pride
              ourselves on our deep-rooted passion for the Defender's unique
              blend of classic ruggedness and contemporary performance. Our
              knowledgeable team offers personalized service, comprehensive
              care, and an intimate understanding of what it means to own and
              enjoy a Defender. Through integrity, expertise, and a commitment
              to excellence, we strive to build lasting relationships and ensure
              that every interaction with [Dealership Name] is as exceptional as
              the vehicles we represent. At [Dealership Name], it's not just
              about making a purchase; it's about embarking on a journey that
              respects the past, celebrates the present, and anticipates the
              future of adventure with every turn of the key."
            </p>
          </div>
        </section>
        <section className="relative text-left border-t-8 border-black">
          <img
            src="https://cdn.shopify.com/s/files/1/0043/8471/8938/files/3d53dbd0-82cb-11eb-968f-1b7758c09ec1-LandRoverDefenderQ121SiteHero2.jpg?auto=format&fm=jpg&q=80&fit=crop&crop=entropy&w=812&h=457"
            alt="Defender-110"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 bg-white bg-opacity-70 p-5 max-w-[80%] rounded-lg mb-14 ml-12 border-l border-black border-b border-black">
            <h1 className="text-5xl font-medium mb-4">Defender 110</h1>
            <p className="text-lg font-semibold mb-8">
              The Land Rover Defender 110 stands as an emblem of rugged
              durability and versatile performance. Boasting a robust frame and
              advanced 4x4 capabilities, it's designed to conquer the toughest
              terrains with ease, whether navigating rocky mountain trails or
              city streets. Its spacious interior, offering optional third-row
              seating, combines practicality with comfort, making it ideal for
              adventurous families or off-road enthusiasts. A blend of classic
              design and modern technology, the Defender 110 is a testament to
              enduring automotive craftsmanship and off-road supremacy.
            </p>
            <Link href="/vehicles">
              <button className="bg-[#004225] rounded-lg text-white border-none py-2 px-4 font-['Outfit'] text-base cursor-pointer transition duration-300 ease-in-out hover:bg-gray-600 w-32">
                Explore
              </button>
            </Link>
          </div>
        </section>
        <section className="bg-white border-t-8 border-black h-[50vh] flex justify-center items-center">
          <CarouselTile />
        </section>
        <section className="relative text-left border-t-8 border-black">
          <img
            src="https://www.tweakedautomotive.com/wp-content/uploads/2016/07/90-hardtop-v2.jpg"
            alt="Defender-hardtop"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 right-0 bg-gray-100 bg-opacity-60 p-5 max-w-[80%] rounded-lg mb-14 mr-12 border-r border-black border-b border-black">
            <h1 className="text-5xl font-medium mb-4">Accessories</h1>
            <p className="text-base font-semibold mb-8 text-black">
              The Land Rover Defender, a symbol of versatility and robust
              design, offers a wide array of accessories to cater to every kind
              of journey and lifestyle. Our collection extends across all
              Defender models, enhancing both functionality and aesthetic
              appeal. For off-road enthusiasts, we offer rugged upgrades like
              durable skid plates, raised air intakes, and expedition roof
              racks, ensuring readiness for any terrain. Interior customization
              options include luxury carpet mats and tailored seat covers,
              marrying comfort with durability. For added convenience,
              deployable roof ladders and electronic winch kits are available,
              making challenging adventures more accessible. Stylish exterior
              modifications, such as personalized grille designs, alloy wheels,
              and side-mounted gear carriers, not only augment the vehicle's
              appearance but also its practicality. Tech-savvy drivers can enjoy
              advanced navigation and entertainment system upgrades, keeping
              them connected wherever they roam. Each accessory, from protective
              covers to lighting enhancements, is designed to elevate the iconic
              Land Rover Defender's experience, making it a truly adaptable
              vehicle for urban commutes or wilderness explorations. This
              comprehensive range of accessories ensures that every Land Rover
              Defender is not just a vehicle, but a personalized companion for
              life's adventures.
            </p>
            <div className="text-right">
              <Link href="/accessories">
                <button className="bg-[#004225] rounded-lg text-white border-none py-2 px-4 font-['Outfit'] text-base cursor-pointer transition duration-300 ease-in-out hover:bg-gray-600 w-32">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="relative text-left border-t-8  border-b-8 border-black">
          <img
            src="https://media.jlrms.com/styles/low_res/s3/2021-02-09/image/ccee40d2-97ae-4ee4-bc98-cfdfac7addf9/L_Classic_Trophy_100221_21_1.jpeg?VersionId=oHlUExiOlEfpi.SYuDGkPiqv3UY7TYRj&itok=Y-ZGl86R"
            alt="Defender-services"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 bg-white bg-opacity-70 p-5 max-w-[80%] rounded-lg mb-14 ml-12 border-l border-black border-b border-black">
            <h1 className="text-5xl font-medium mb-4">Service & Maintenance</h1>
            <p className="text-lg font-semibold mb-8">
              At our dealership, we understand the importance of keeping your
              Land Rover Defender in pristine condition. Our team of highly
              skilled technicians is dedicated to providing exceptional service
              and maintenance, ensuring your beloved vehicle remains a reliable
              and high-performing companion on every adventure. From routine
              inspections and scheduled maintenance to complex repairs and
              restorations, we utilize the latest diagnostic tools and genuine
              Land Rover parts to preserve the integrity and longevity of your
              Defender. Our state-of-the-art service facilities are equipped to
              handle everything from minor tune-ups to complete overhauls,
              guaranteeing that your vehicle receives the utmost care and
              attention to detail.
            </p>
            <Link href="/Service">
              <button className="bg-[#004225] rounded-lg text-white border-none py-2 px-4 font-['Outfit'] text-base cursor-pointer transition duration-300 ease-in-out hover:bg-gray-600 w-32">
                Explore
              </button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
