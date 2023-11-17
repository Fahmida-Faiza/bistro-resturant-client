import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Menu = () => {
    const [menu] =useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
  
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss ! Menu</title>
         
            </Helmet>
          
            <Cover img={menuImg}  title="Our Menu" ></Cover>
            {/* main cover */}
            <SectionTitle
                heading="Todays Offer"
                subheading="Dont Miss"

            >  </SectionTitle>
            {/* offered menu items */}

            <MenuCategory items={offered}></MenuCategory>
            {/* desert menu items */}

            <MenuCategory
            items={desserts}
            title="Dessert"
            img={dessertImg}
            
            
            >

            </MenuCategory>

{/* pizza */}
            <MenuCategory
                items={pizza}
                title=
                {"Pizza"}
                img={pizzaImg}

            
            
            ></MenuCategory>
            <MenuCategory
                items={salad}
                title=
                {"Salad"}
                img={saladImg}

            
            
            ></MenuCategory>
            <MenuCategory
                items={soup}
                title=
                {"Soup"}
                img={soupImg}

            
            
            ></MenuCategory>
        </div>
    );
};

export default Menu;