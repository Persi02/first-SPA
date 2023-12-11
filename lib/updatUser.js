export async function put(id, user) {
    try {
        const res = await fetch(`http://localhost:4400/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(user)
        })

    } catch (error) {
        console.error(error);
    }
}