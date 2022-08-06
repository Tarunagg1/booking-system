import useFetch from '../../hooks/useFetch';
import "./featuredProperties.css";

const FeaturedProperties = () => {
    const { error, loading, data } = useFetch("/hotel?featured=true&limit=4");
    // console.log(data);

    return (
        <div className="fp">
            {
                loading ? (
                    "loading please wait..."
                ) : (
                    data.map((ele) => (
                        <div className="fpItem">
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                                alt=""
                                className="fpImg"
                            />
                            <span className="fpName">Aparthotel Stare Miasto</span>
                            <span className="fpCity">Madrid</span>
                            <span className="fpPrice">Starting from {ele.cheapestPrice}</span>
                            {
                                ele.rating && (
                                    <div className="fpRating">
                                        <button>{ele.rating}</button>
                                        <span>Excellent</span>
                                    </div>
                                )
                            }
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default FeaturedProperties;
