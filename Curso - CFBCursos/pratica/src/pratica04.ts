enum UserRole {adm, user, guest}

const users: {id: number, name: string, age: number, role: UserRole, status: "active" | "inactive"}[] = [
    {
        id: 1,
        name: "rafa",
        age: 22,
        role: UserRole.user,
        status: "active"
    },
    {
        id: 2,
        name: "pad",
        age: 17,
        role: UserRole.guest,
        status: "inactive"
    }
]


const changeUserRole = (id: number, newRole: UserRole) => {
    users.forEach((obj) => {
        if(obj.id == id) {
            obj.role = newRole
        }
    })
}

const filterByRole = (role: UserRole) => {
    return users.filter((obj) => {return obj.role === role})
}

const getAdults = () => {
    return users.filter((obj) => { return obj.age >= 18})
}

const getActive = () => {
    return users.filter((obj) => {return obj.status == "active"})
}

const getUserSummary = (id: number) => {
    const currentUser = users.find(user => user.id === id)

    if(!currentUser) {
        return "Usuario não encontrado"
    }

    return `
        Nome: ${currentUser.name}
        Idade: ${currentUser.age}
        Nivel: ${UserRole[currentUser.role]}
        ativo: ${currentUser.status === "active" ? "Sim" : "Não"}
    `
}

changeUserRole(1, UserRole.adm)
changeUserRole(2, UserRole.user)

const admins = filterByRole(UserRole.adm)
const adults = getAdults()
const activeUsers = getActive()
const currentSummaryUser = getUserSummary(1)

console.log(currentSummaryUser)
