import { useEffect, useState } from 'react';
import Listing from '../Shop/Listing';
import { Api } from '../../Api/Api';
import toast from 'react-hot-toast';
import ProductItem from '../../Components/ProductItem';

function Wishlist({ user }) {

    const [wishlistProducts, setWishlistProducts] = useState([])
    const GetWistList = () => {
        Api.get('/wishlist/wishlist')
            .then((res) => {
                if (res.data.status) {
                    setWishlistProducts && setWishlistProducts(res.data.wishlist || [])
                    console.log("wishlist Product state data : ",wishlistProducts);
                } else {
                    setWishlistProducts([]);
                    toast.error('No Products are there in wishlist');
                }
            }).catch((error) => {
                console.log("error", error)
                toast.error('No Products Found. Try Again Later');
            });
    }

    useEffect(() => {
        GetWistList();
    }, [])

    return (
        <div className='grid grid-cols-3 gap-4'>

            {wishlistProducts?.map((item, index) => (
                <ProductItem wishlistItem={wishlistProducts} product={item} wishlist={true}  wishlistPage={true} GetWistList={GetWistList}/>
            ))}
        </div>
    )
}

export default Wishlist;