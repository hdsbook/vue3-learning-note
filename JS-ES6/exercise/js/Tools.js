const Add = (a, b) => {
    return a + b;
};


// 可以 export 很多東西出去，但是default只能有一個
export default Add;

// 要用 export 丟出去的只能用 const 變數丟出去
export const Name = "mike";
export const age = 12;
export const Minus = (a, b) => {
    return a - b;
}