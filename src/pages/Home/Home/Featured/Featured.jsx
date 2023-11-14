import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

import featuredImg from '../../../../assets/home/featured.jpg'
import  './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20"> 
            <SectionTitle
            
            subheading={"check it out"}
            heading="Featured Items"
            
            >

            </SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum itaque nam ab earum autem deserunt sed repellendus quibusdam, facilis eum ut quas odio enim. Aut laudantium ducimus enim? Adipisci deserunt neque inventore id velit quia placeat ipsa? Deserunt quibusdam, iste asperiores aliquam illo nam, in ullam culpa nesciunt ut quo?</p>
                    <button className="btn btn-outline btn-secondary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;