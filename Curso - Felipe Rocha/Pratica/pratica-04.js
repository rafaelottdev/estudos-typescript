var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(userId, userName, userEmail, userPassword, permission) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.permission = permission;
    }
    return User;
}());
// const newUser = new User(1, 'Rafa', 'rafa@gmail.com', '1234', ['adm', 'usuario'])
// console.log(newUser.showUser())
var Adm = /** @class */ (function (_super) {
    __extends(Adm, _super);
    function Adm(superEntrance, userId, userName, userEmail, userPassword, permission) {
        var _this = _super.call(this, userId, userName, userEmail, userPassword, permission) || this;
        _this.superEntrance = superEntrance;
        return _this;
    }
    return Adm;
}(User));
var newAdm = new Adm('string', 3, '3', 'df', 'df', ['dfd', 'fd']);
console.log(newAdm);
