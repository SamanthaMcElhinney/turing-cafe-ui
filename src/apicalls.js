const getAllReservations = () => {
    return fetch("http://localhost:3001/api/v1/reservations")
    .then(results => {
        if(!results.ok) {
            throw new Error()
        }
        return results.json()
    })
}

export {getAllReservations}