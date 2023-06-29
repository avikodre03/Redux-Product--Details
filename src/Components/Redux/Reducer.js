const initialData = {
    electronicProducts: [],
    jeweleryProducts: [],
    mensProducts: [],
    womensProducts: []
}

export let productReducer = (state = initialData, action) => {

    switch (action.type) {
        case "electronicProducts":
            state = {
                ...state,
                electronicProducts: action.payload
            };
            break;
        case "jeweleryProducts":
            state = {
                ...state,
                jeweleryProducts: action.payload
            };
            break;
        case "mensProducts":
            state = {
                ...state,
                mensProducts: action.payload
            };
            break;
        case "womensProducts":
            state = {
                ...state,
                womensProducts: action.payload
            };
            break;
    }


    return state;
}

export default productReducer;