import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const artists =['sohanAli','tahsanKhan','minarRahman','arRahman']
  const products =[
    {name:'Photoshop',price:'$99.99'},
    {name:'Illustrator',price:'$60.19'},
    {name:'Adobe',price:'$20.18'}

  ]
  const Friends =['Razia','Sabbir','Fahim','Mamoon']
  // dynamic maping
  const productNames =products.map(product=>product.name)
  console.log(productNames);
  // const friendsName =Friends.map(friend=>friend)
  // console.log(friendsName);
  return (
    <div className="App">
      <header className="App-header">
        
        <p>My first react pragraph</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            Friends.map(friend=><li>{friend}</li>)
          }
        </ul>
        {/* dynamic */}
        {/* <ul> */}
          {/* {
            artists.map(artist =><li>{artist}</li>)
          } */}
          {/* {
            
          } */}
         
        {/* </ul> */}
        {/* dynamic  */}
        {
          products.map(pd=><Products product={pd}></Products>)
        }
        {/* dynamic way first parts */}
        {/* <Products product={products[0]}></Products> */}

        {/* <Person name="Hasan Ali" hourlyCharge="$20"></Person>
        <Person name="Romel Habib" hourlyCharge="$10"></Person>
        <Person name ="Khaled Qureshi" hourlyCharge="$30"></Person> */}
      </header>
    
    </div>
  );
}

function Counter() {
  const [count,setCount] =useState(10)
 

    return(
      <div>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count +1)}>Increase</button>
        <button onClick={() => setCount(count -1)}>Decrease</button>
      </div>
    )
}

function Users(){
  const [albums,setAlbums] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => setAlbums(data))
  },[]);
  return(
    <div>
      <h3>Dynamic Users:{albums.length}</h3>
      <ul>
        {
          albums.map(album =><li>{album.title}</li>)
          
        }
      </ul>
    </div>
  )
}
// function Person(props) {
//   console.log(props);
 
//   return(
//   <div style={{border : '2px solid red',margin:'10px',backgroundColor:'yellow',color:'black', padding:'20px',}}>
//     <h1>Name :{props.name}</h1>
//     <h1>charge:{props.hourlyCharge}</h1>
//     {/* <h3>charge:{perHour.hourlyCharge}</h3> */}
//     <h4>Location:Mirpur2-Dhaka</h4>
//   </div>
//   ) 
// }
function Products(props) {
  
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  console.log(props);
  return(
  <div style={productStyle}>
    
    <h3>{props.product.name}</h3>
    <h5>{props.product.price}</h5>
    <button>Buy Now</button>
  </div>
  ) 
}
export default App;
