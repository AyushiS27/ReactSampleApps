import './index.css';

const Button = ({label, variant, disabled}) => {
    return <button className={`btn-custom ${variant}`} disabled={disabled} >{label}</button>
}



export default function CustomButton(){
    return (<div className="abc">
    <Button label="Basic" variant="basic" />
    <Button label="Link" variant="link" />
    <Button label="Secondary" variant="secondary" />
    <Button label="Danger" variant="danger" />
    <Button label="Disabled" disabled={true} />
    <Button label="Primary" variant="primary" />
    <Button label="Outline" variant="outline" />
    <Button label="Medium" variant="primary" size="medium" />
    <Button label="Large" variant="outline" size="large" />
  </div>)    
}

