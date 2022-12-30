function greetings() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    console.log(`${hours}:${minutes}`)
    
    if (hours >= 0 && hours <= 5) {
        return 'Boa madrugada';

      } else if (hours >= 6 && hours < 12) { 
        return 'Bom dia';

      } else if (hours >= 12 && hours < 18) {
        return 'Boa tarde';

      } else if (hours >= 18 && hours <= 23) { 
        return 'Boa noite';
      }

}
//greetings()
console.log(greetings());
