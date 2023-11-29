import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
      <AutoplaySlider className="h-[400px] lg:h-[600px] z-0"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
      >
        <div
          style={{
            backgroundImage: "url(/src/assets/images/4532.avif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-2xl lg:text-4xl text-white lg:w-[600px] font-bold lg:p-2 p-12">
            Where tourists seldom tread, part 6: &apos;ugly, lovely towns&apos;
            with stories to tell
          </h2>
        </div>
        <div
          style={{
            backgroundImage: "url(/src/assets/images/5967.avif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-2xl lg:text-4xl  text-white lg:w-[600px] font-bold lg:p-2 p-12">
            Share a tip on your travel discovery of the year - you could win a
            holiday voucher
          </h2>
        </div>
        <div
          style={{
            backgroundImage: "url(/src/assets/images/6123.avif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-2xl lg:text-4xl text-white lg:w-[600px] font-bold lg:p-2 p-12">
          Merseyside&apos;s towpath to the past: a 20-mile walk along the Industrial Revolution&apos;s first canal
          </h2>
        </div>
        <div
          style={{
            backgroundImage: "url(/src/assets/images/4288.avif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-2xl lg:text-4xl text-white lg:w-[600px] font-bold lg:p-2 p-12">
          A 2014 survey found Dungannon to be one of the five cheeriest towns in the UK … locals love it and so do incomers
          </h2>
        </div>
        <div
          style={{
            backgroundImage: "url(/src/assets/images/4928.avif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-2xl lg:text-4xl text-white lg:w-[600px] font-bold lg:p-2 p-12">
          Merthyr lies in its wide valley like a mystery, an unreal city. 
          </h2>
        </div>
        <div
          style={{
            backgroundImage: "url(/src/assets/images/2000.avif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-2xl lg:text-4xl text-white lg:w-[600px] font-bold lg:p-2 p-12">
          Bergamo and Brescia: an active trip to Italy’s joint capitals of culture
          </h2>
        </div>
      </AutoplaySlider>
    </>
  );
};

export default Banner;
