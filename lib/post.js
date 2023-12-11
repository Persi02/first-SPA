export async function postUser(userToPost) {
    try {
        const res = await fetch("http://localhost:4400/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(userToPost)
        })

    } catch (error) {
        console.error(error);
    }

}
export const fetchUsers = async () => {
    try {
        const userData = await fetch('http://localhost:4400/users');
        return await userData.json();

    } catch (error) {
        console.error("Error fetching user", error)
    }
}

export function creatButtonSA(type, classeName, content) {
    const btn = document.createElement("button");
    btn.classList.add(classeName);
    btn.setAttribute("type", type)
    btn.textContent = content;
    return btn
}
export const fetchUser = async (idTofetch) => {
    try {
        const res = await fetch(`http://localhost:4400/users/${idTofetch}`)
        return await res.json();
    } catch (error) {
        console.error("Error fetching user", error)
    }
}