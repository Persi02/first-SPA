export async function deletUser(id) {
    try {
        const res = await fetch(`http://localhost:4400/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

    } catch (error) {
        console.error(error);
    }
}