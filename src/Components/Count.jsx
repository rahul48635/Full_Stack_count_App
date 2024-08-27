import { useRecoilValue, useSetRecoilState } from "recoil"
import {count, isEven} from "../store/states"

export default function Count(){
    const Count = useRecoilValue(count)
    const setCount=useSetRecoilState(count)
    const iseven=useRecoilValue(isEven)
    // console.log(isEven)

    return(<div>
    <div>{Count}</div>
    <div>{iseven?"Number is Even":null}</div><br />
    <button onClick={()=>setCount(num=> num+1)}>Increment</button>
    <button onClick={()=>setCount(Count=> Count-1)}>Decrement</button>
    </div>)
  }
