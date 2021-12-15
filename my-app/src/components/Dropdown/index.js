import { useEffect, useRef, useState } from "react";



function getList(){
    return [
        {name: 'Banglore'},
        {name: 'Chennai'},
        {name: 'Pune'},
        {name: 'India'},
        {name: 'Delhi'},
        {name: 'Gujrat'},
    ]
}

function apiResponse(searchKey) {
    console.log("Run Api response for", searchKey);
        return new Promise((resolve, reject) => {
            let list = getList();
                let newList; 
                if(!searchKey){
                    newList = getList();
                }
                else{
                    newList = list.filter((ele, index) => {
                        return ele.name.includes(searchKey);
                    })
                }
                resolve(newList);
           }) 
}

const useDebounce = (value, ms) => {
    const [debouncedVal, setDebounceVal]  = useState('');
    const timer = useRef();
    
    useEffect(() =>{
        console.log("Inside effect")
        if(timer.current){
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            console.log("run debounce value");
            setDebounceVal(value);
        },ms);

        //return () => clearTimeout(timer.current);
    },[value]);
    console.log("return debounde", debouncedVal);
    return debouncedVal;
}

export default function SearchBox(){
    const [textInput, setTextInput] = useState('');
    const [list, setList] = useState(getList());
    const onInputChange = (evt) => {
        setTextInput(evt.target.value);
    };

    const debounceText = useDebounce(textInput, 1000);

    useEffect(async ()=>{

        console.log("Change text Inp ", textInput);
        let result = await apiResponse(textInput);
        setList(result);

    }, [debounceText]);

    return (<div>

        <div><input type="text" value={textInput} onChange = {onInputChange} /></div>
        <div className={`result-container`}>
            <ul>
            {list.map((ele) => {
                return <li>{ele.name}</li>
            })}
            </ul>
        </div>
    </div>
        
    )

}