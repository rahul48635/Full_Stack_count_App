import {atom,selector} from "recoil";
export const count=atom({
  key:"count",
  default:0
})

export const isEven=selector({
  key:"isEven",
  get:({get})=>{let num =get(count)
    return num%2==0 ;
  }
})