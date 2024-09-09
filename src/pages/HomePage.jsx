import Layout from "../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-[70%] mx-auto mt-6">
        {images.map((image, i) => (
          <div className="w-[250px] h-[200px]" key={i}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;

const images = [
  "https://betbuzz365.live/static/media/banner_AESexy-half.a5282bd5.png",
  "https://betbuzz365.live/static/media/banner_CoinToss-half.634dacc9.png",
  "https://betbuzz365.live/static/media/banner_numberMatka-half.e9371bf8.png",
  "https://betbuzz365.live/static/media/banner_AESexy-half.a5282bd5.png",
  "https://betbuzz365.live/static/media/banner_CoinToss-half.634dacc9.png",
  "https://betbuzz365.live/static/media/banner_numberMatka-half.e9371bf8.png",
  "https://betbuzz365.live/static/media/banner_CoinToss-half.634dacc9.png",
  "https://betbuzz365.live/static/media/banner_numberMatka-half.e9371bf8.png",
  "https://betbuzz365.live/static/media/banner_AESexy-half.a5282bd5.png",
  "https://betbuzz365.live/static/media/banner_CoinToss-half.634dacc9.png",
  "https://betbuzz365.live/static/media/banner_numberMatka-half.e9371bf8.png",
  "https://betbuzz365.live/static/media/banner_AESexy-half.a5282bd5.png",
  "https://betbuzz365.live/static/media/banner_CoinToss-half.634dacc9.png",
  "https://betbuzz365.live/static/media/banner_numberMatka-half.e9371bf8.png",
  "https://betbuzz365.live/static/media/banner_CoinToss-half.634dacc9.png",
  "https://betbuzz365.live/static/media/banner_numberMatka-half.e9371bf8.png",
  "https://betbuzz365.live/static/media/banner_AESexy-half.a5282bd5.png",
  "https://betbuzz365.live/static/media/banner_CoinToss-half.634dacc9.png",
  "https://betbuzz365.live/static/media/banner_CoinToss-half.634dacc9.png",
  "https://betbuzz365.live/static/media/banner_numberMatka-half.e9371bf8.png",
];
