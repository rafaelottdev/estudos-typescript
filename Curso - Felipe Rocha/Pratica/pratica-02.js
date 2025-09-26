var buildPerson = function (name, age, sex, isTall, hasDog) {
    if (name == '' || age.toString() == '' || sex == '' || isTall.toString() == '' || hasDog.toString() == '') {
        return;
    }
    return [name, age, sex, isTall, hasDog];
};
console.log(buildPerson('rafa', 18, 'M', false, false));
var person = function (name, age) {
    return name + ' ' + age;
};
console.log(person('rafael', 21));
var dog = function (name, age, isDangerous) {
    return name + age + isDangerous;
};
console.log(dog('toto', 3, false));
