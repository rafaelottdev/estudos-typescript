var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Domingo"] = 1] = "Domingo";
    DiasSemana[DiasSemana["Segunda"] = 2] = "Segunda";
    DiasSemana[DiasSemana["Ter\u00E7a"] = 3] = "Ter\u00E7a";
    DiasSemana[DiasSemana["Quarta"] = 4] = "Quarta";
    DiasSemana[DiasSemana["Quinta"] = 5] = "Quinta";
    DiasSemana[DiasSemana["Sexta"] = 6] = "Sexta";
    DiasSemana[DiasSemana["Sabado"] = 7] = "Sabado";
})(DiasSemana || (DiasSemana = {}));
console.log(DiasSemana.Domingo);
