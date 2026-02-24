"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole;
(function (UserRole) {
    UserRole[UserRole["adm"] = 0] = "adm";
    UserRole[UserRole["user"] = 1] = "user";
    UserRole[UserRole["guest"] = 2] = "guest";
})(UserRole || (UserRole = {}));
const users = [
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
];
const changeUserRole = (id, newRole) => {
    users.forEach((obj) => {
        if (obj.id == id) {
            obj.role = newRole;
        }
    });
};
const filterByRole = (role) => {
    return users.filter((obj) => { return obj.role === role; });
};
const getAdults = () => {
    return users.filter((obj) => { return obj.age >= 18; });
};
const getActive = () => {
    return users.filter((obj) => { return obj.status == "active"; });
};
const getUserSummary = (id) => {
    const currentUser = users.find(user => user.id === id);
    if (!currentUser) {
        return "Usuario não encontrado";
    }
    return `
        Nome: ${currentUser.name}
        Idade: ${currentUser.age}
        Nivel: ${UserRole[currentUser.role]}
        ativo: ${currentUser.status === "active" ? "Sim" : "Não"}
    `;
};
changeUserRole(1, UserRole.adm);
changeUserRole(2, UserRole.user);
const admins = filterByRole(UserRole.adm);
const adults = getAdults();
const activeUsers = getActive();
const currentSummaryUser = getUserSummary(1);
console.log(currentSummaryUser);
