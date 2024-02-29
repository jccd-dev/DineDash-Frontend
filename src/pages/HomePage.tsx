import landingImage from "../assets/landing.png";
import appDLimage from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Dine into and Dash away
        </h1>
        <span className="text-xl">Food is just clicj away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway is a Dash!
          </span>
          <span>
            Downlload the DineDash App for Faster ordering and personalised
            recommendations.
          </span>
          <img src={appDLimage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
