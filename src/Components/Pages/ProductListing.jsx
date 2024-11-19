import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateDisabledItems} from '../../Redux/Slices/cartSlice';

export default function ProductListing() {
    const dispatch = useDispatch();

    const products = [{
        category:"Bush",
        items:[{
            id:1,
            itemName:"Areca Palm",
            itemPrice:75,
            itemImage:"https://raveenlakshitha.github.io/NatureNest/images/Areca-Palm-1-480x600.jpg"
        },{
            id:2,
            itemName:"Massangeana Corn Plant",
            itemPrice:110,
            itemImage:"https://raveenlakshitha.github.io/NatureNest/images/Dracaena-Mass-Cane-3G-3-cane-480x600.jpg"
        },{
            id:3,
            itemName:"Cast Iron Plant",
            itemPrice:90,
            itemImage:"https://raveenlakshitha.github.io/NatureNest/images/cast-iron-plant-1-480x600.jpg"
        },]
    },{
        category:"Totem",
        items:[{
            id:4,
            itemName:"Philodendron ‘Emerald Red’",
            itemPrice:85,
            itemImage:"https://raveenlakshitha.github.io/NatureNest/images/Philodendron-Red-Emerald-3G-Totem-480x600.jpg"
        },
            {
            id:5,
            itemName:"Rhaphidophora decursiva",
            itemPrice:91,
            itemImage:"https://raveenlakshitha.github.io/NatureNest/images/Rhaphidophora-decursiva-Totem-3G-500x600.jpg"
        },
            {
            id:6,
            itemName:"Philodendron ‘Silver Sword’",
            itemPrice:85,
            itemImage:"https://raveenlakshitha.github.io/NatureNest/images/Philodendron-Silver-Sword-3G-Totem-1-480x600.jpg"
        },]
    },{
        category:"Tree",
        items:[
            {id:7,
            itemName:"Fiddle Leaf Fig",
            itemPrice:191,
            itemImage:"https://raveenlakshitha.github.io/NatureNest//images/Ficus-Lyrata-7G-STD-480x600.jpg"
        },
            {id:8,
            itemName:"Ficus benjamina ‘Wintergreen’",
            itemPrice:85,
            itemImage:"https://raveenlakshitha.github.io/NatureNest/images/Ficus-Wintergreen-3G-STD-480x600.jpg"
        },
            {id:9,
            itemName:"Compact Dwarf Umbrella Tree",
            itemPrice:37,
            itemImage:"https://raveenlakshitha.github.io/NatureNest/images/Schefflera-MEdium-Compacta-tree-480x600.jpg"
        },
    ]
    }    
];

const disabledItems = useSelector(state => state.cart.disabledItems);

const addToCartItems = (item) => {
    dispatch(addToCart(item));
    dispatch(updateDisabledItems({switchType:true, itemId:item.id}));
}

return (
<>
<div className='product-listing-container'>
    <div><span className='heading'>Houseplants</span></div>
    <ul>
    {products.map((product,index) => (
        <div key={index}>
            <li><span className='category-name'>{product.category}</span></li>
            <div >
            <ul className="product-cards-row">
                {product.items.map((item, itemIndex)=>(
                    <li key={itemIndex}>
                        <div className='item-card'>
                            <img className="card-image" src={item.itemImage} alt="img"  />
                            <span className='item-name'>{item.itemName}</span>
                            <span className='item-price'>${item.itemPrice}</span>
                            <button className={`AddToCartButton ${disabledItems.includes(item.id) ? 'disabled' : ''}`} disabled={disabledItems.includes(item.id)} onClick={() => addToCartItems(item) }> Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    ))}
    </ul>
</div>
</>
)
}
