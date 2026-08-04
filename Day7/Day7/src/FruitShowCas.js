import { useEffect, useState } from "react";
import "./CSS/FruitShowCase.css";

function FruitShowCas()
{
    const leftFruits=[
        {name:"Apple",image:"/images/apple.jpg"},
        {name:"Mango",image:"/images/mango.jpg"},
        {name:"Banana",image:"/images/banana.jpg"},
    ]
    const rightFruits=[
        {name:"Pineapple",image:"/images/pineapple.jpg"},
        {name:"Woodapple",image:"/images/woodapple.jpg"},
        {name:"Orange",image:"./images/orange.jpg"},
    ];
    
    const allFruits=[...leftFruits,...rightFruits];
    const[currentIndex, setCurrentIndex]=useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % allFruits.length);
        }, 3000);
      
        return () => clearInterval(interval);
      }, [allFruits.length]);
      
    return(
            <div className="container">
                <div>
                    {
                        leftFruits.map((fruit,i)=>(
                            <div 
                            key={i}
                            className={`fruit ${allFruits[currentIndex].name === fruit.name? "active":""}`}> 
                            {fruit.name}</div>
                    ))}
                    </div>

                <div className="image-box">
                    <img src={allFruits[currentIndex].image}/>

                </div>
            </div>
    )
}


export default FruitShowCas;