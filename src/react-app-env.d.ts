/// <reference types="react-scripts" />
interface IRate {
    rate : number,
    count : number
}

interface IProducts {
    category : string,
    id : number,
    description : string,
    image : string
    price : number,
    title : string,
    rating : IRate
}

interface IFilters {
    category : string,
    price : string,
    rating : string
}
