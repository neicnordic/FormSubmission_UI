import { createStore } from "redux";

const rand = () => Math.floor(Math.random() * 9000000);

const formSchema = {
    id: rand(),
    first_name: "",
    lastName: "",
    age: ""
};

const initialState = {
    forms: [formSchema]
};

export function ADD_FORM() {
    return {
        type: "ADD_FORM"
    };
}

export function UPDATE_FORM(form) {
    return {
        type: "UPDATE_FORM",
        form
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FORM":
            return {
                ...state,
                forms: [...state.forms, { ...formSchema, id: rand() }]
            };
        case "UPDATE_FORM":
            return {
                ...state,
                forms: state.forms.map(form => {
                    if (form.id === action.form.id) {
                        return { ...form, ...action.form };
                    }
                    return form;
                })
            };

        default:
            return state;
    }
};

export default createStore(reducer);
