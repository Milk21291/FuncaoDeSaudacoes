function saudacoes() {
    const data = new Date()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    console.log(`${hora}:${minuto}`)
    
    if (hora >= 0 && hora <= 5) {
        return 'Boa madrugada';

      } else if (hora >= 6 && hora < 12) { 
        return 'Bom dia';

      } else if (hora >= 12 && hora < 18) {
        return 'Boa tarde';
        
      } else if (hora >= 18 && hora <= 23) { 
        return 'Boa noite';
      }

}
//saudacoes()
console.log(saudacoes());
