import BannerImg from '../../assets/123.jpg'
const Banner = () => {
    return (
        <div className='rounded-2xl ' style={{
            width: "",
            height: "600px",
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "cover",
            
        }}>
  

        <div className='text-center content-center h-full space-y-6 '>
            <h2 className=' text-2xl font-bold text-white'>
            Discover an exceptional cooking <br /> class tailored for you!
            </h2>
            <small>
            <p className='text-white text-sm'>
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.

            </p>
            </small>
            <div className='space-x-2'>
                <button className='bg-green-400 text-black font-bold py-2 px-4 rounded-full'>
                    Explore Now
                </button>
                <button className='bg-transparent text-black font-bold py-2 px-4 rounded-full border-2'>
                    Our Feedback
                </button>
            </div>
        </div>

            
        </div>
    );
};

export default Banner;