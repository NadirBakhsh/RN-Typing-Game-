export const update_user = (user) => {
    return {
        type: "SET_USER",
        data: user
    }
}


export const get_all_user = (users) => {
    return {
        type: "SET_ALL_USER",
        data: users
    }
}




