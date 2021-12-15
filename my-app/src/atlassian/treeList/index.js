import './index.css';
import {fetchData} from '../data';
import { useEffect, useState } from 'react';

function ItemTree({ele}){
    const [active , setActive] = useState(false);

    const onItemClickHandler = () => {
        setActive(prev => !prev);   
    }
    const childrenList = ele.children && ele.children.length > 0; 

    return <li className={`${childrenList ? active ? 'arrowDown': 'arrowUp': ''}`} key={ele.id} onClick={onItemClickHandler}>
                <span>{ele.name}</span>
                {active && ele.children && ele.children.length > 0 && <LayoutTree listVal = {ele.children}/>}
            </li>
}

function LayoutTree({listVal}){
    return (
        <ul>
            {listVal.map((ele) => {
                return <ItemTree ele={ele}/>
                
            })}
        </ul>
    );
}


export default function TreeList(){
    const [list, setList] = useState([]);
    useEffect(async() => { 
        let response = await fetchData();
        console.log(response);

        setList(response);
    },[]);

    return(<div className={"tree-container"}>

        <LayoutTree listVal = {list}/>
    </div>)    
}