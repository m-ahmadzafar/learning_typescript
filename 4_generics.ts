
// generics provide variables to types

// a usual array can have any but generics allow us
// to have arrays with type.
type StringArray = Array<string>;

let usualArray = [12,true, "pookie"];

let newStringArray: StringArray = ["hi", "hello"];
// error: 
// let newStringArray: StringArray = ["hi", "hello", 12];

// i can declare my own type that uses generics as well

interface MyType<Type> {
    id: Type
    age: Number
}

// while declaring an instance, we specify the type
let me: MyType<String> = {
    id: "Ahmad",
    age: 21
} 

let me_Robot : MyType<Number> = {
    id: 12345, 
    age: 21
}