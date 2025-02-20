
import './ItemListContainer.css'; 
import Item  from '../item/Item';

function ItemListContainer() {
    return(
        
      <section className='ItemListContainer'>

        <Item nombre={'Bálsamo labial Cheery'} price={8700} src={'public/images/1.jpg'} />
        <Item nombre={'Rubor con acabado sedoso'} price={12000} src={'public/images/2.jpg'} />
        <Item nombre={'Base de líquida Radiance'} price={16000} src={'public/images/3.jpg'} />
        <Item nombre={'Juego de brochas Pro Look'} price={19000} src={'public/images/4.jpg'} />
      </section>
      
    ); 
}
export default ItemListContainer; 