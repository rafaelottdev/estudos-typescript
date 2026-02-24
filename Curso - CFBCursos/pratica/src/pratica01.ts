class Statements {
    protected types: string[] = ["Ações", "FIIs", "Tesouro Direto", "CDB", "Cripto", "Dólar"]
    protected investments = {
        share: {qtdeDisp: 30},
        fii: {qtdeDisp: 20},
        td: {qtdeDisp: 5},
        cdb: {qtdeDisp: 55},
        cripto: {qtdeDisp: 10},
        dolar: {qtdeDisp: 100}
    }

    constructor() {      
    }

    buy(type: string, qtde: number): void {
        switch(type) {
            case "share": {
                this.investments.share.qtdeDisp -= qtde
                break
            }

            case "fii": {
                this.investments.fii.qtdeDisp -= qtde
                break
            }

            case "td": {
                this.investments.td.qtdeDisp -= qtde
                break
            }

            case "cdb": {
                this.investments.cdb.qtdeDisp -= qtde
                break
            }

            case "cripto": {
                this.investments.cripto.qtdeDisp -= qtde
                break
            }

            case "dolar": {
                this.investments.dolar.qtdeDisp -= qtde
                break
            }
        }
    }

    help() {
        console.log("Essas são as ações para a compra:")

        console.log("-------------------")
        this.types.forEach((t) => {
            console.log(t)
        })
        console.log("-------------------")

        console.log("Quantidade disponivel: ")

        console.log("-------------------")
        console.log(`Ações.........: ${this.investments.share.qtdeDisp}`)
        console.log(`FIIs..........: ${this.investments.fii.qtdeDisp}`)
        console.log(`Tesouro Direto: ${this.investments.td.qtdeDisp}`)
        console.log(`CDB...........: ${this.investments.cdb.qtdeDisp}`)
        console.log(`Cripto........: ${this.investments.cripto.qtdeDisp}`)
        console.log(`Dólar.........: ${this.investments.dolar.qtdeDisp}`)
        console.log("-------------------")
    }
}

let statements = new Statements()

statements.help()
statements.buy("share", 30)
statements.help()
