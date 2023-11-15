import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import Popular from '../../Home/Home/Popular/Popular'
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss ! Menu</title>
         
            </Helmet>
          
            <Cover img={menuImg}  title="Our Menu" ></Cover>
<Popular></Popular>
            <Cover img={menuImg}  title="Our Menu" ></Cover>
<Popular></Popular>
            <Cover img={menuImg}  title="Our Menu" ></Cover>
<Popular></Popular>
            
        </div>
    );
};

export default Menu;