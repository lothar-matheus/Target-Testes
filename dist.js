const dadosBrutos={
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}
    
const soma = dadosBrutos.SP + dadosBrutos.RJ + dadosBrutos.MG + dadosBrutos.ES+ dadosBrutos.Outros



console.log("sp" + (dadosBrutos.SP /soma) * 100)
console.log("RJ" + (dadosBrutos.RJ /soma) * 100)
console.log("MG" + (dadosBrutos.MG /soma) * 100)
console.log("ES" + (dadosBrutos.ES /soma) * 100)
console.log("Outros" + (dadosBrutos.Outros /soma) * 100)
