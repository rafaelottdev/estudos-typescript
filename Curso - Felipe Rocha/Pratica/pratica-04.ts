class User {
    userId: number
    userName: string
    userEmail: string
    userPassword: string
    permission: string[]

    constructor(userId: number, userName: string, userEmail: string, userPassword: string, permission: string[]) {
        this.userId = userId
        this.userName = userName
        this.userEmail = userEmail
        this.userPassword = userPassword
        this.permission = permission
    }

    transformPermission(permissionList: string[]) {
        let permText:string = ''

        permissionList.forEach((perm, id) => {
            permText += perm

            if(id == permissionList.length-2) {
                permText += ' e '
            }

            else if(!(id == permissionList.length-1 || id == permissionList.length-2)) {
                permText += ', '
            }
        })

        return permText
    }

    showUser() {
        let permissoesTratada = this.transformPermission(this.permission)

        const text = `Usuario ${this.userId}, Nome: ${this.userName}, Email: ${this.userEmail}, ele tem as seguintes permissões: ${permissoesTratada}`

        return text
    }
}


const newUser = new User(1, 'Rafa', 'rafa@gmail.com', '1234', ['adm', 'usuario'])

console.log(newUser.showUser())

class Adm extends User {
    superEntrance: string

    constructor(superEntrance: string, userId: number, userName: string, userEmail: string, userPassword: string, permission: string[]) {
        super(userId, userName, userEmail, userPassword, permission)

        this.superEntrance = superEntrance
    }
}

const newAdm = new Adm('string', 3, '3', 'df', 'df', ['dfd', 'fd'])

console.log(newAdm)