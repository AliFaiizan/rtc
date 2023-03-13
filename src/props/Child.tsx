import { useState } from "react";
interface ChildProps {
    color: string;
    onClick: () => void;
}

// export const Child = ({color}:ChildProps) => {
//   return (
//     <div>{color}</div>
//   )
// }

export const Child:React.FC<ChildProps> = ({color,onClick}:ChildProps) => {
    const [guest, setguest] = useState<string[]>([]);
    const [user,setUser] = useState<{user:string,age:number}|undefined>();

    const handleClick = () => {
        setguest([...guest, 'guest']);
    }
    const onChange= (e:React.ChangeEvent<HTMLInputElement>) => {
        setUser({user:e.target.value,age:10});
    }

    return <div>{color}
    <button onClick={onClick}>
    <button onClick={handleClick}>Add Guest</button>
    <input type="text" onChange={(e) => {} }/>
    </button></div>;
}
