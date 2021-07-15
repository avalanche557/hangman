export const showNotification = (setter: any) => {
    setter(true)
    setTimeout(() => {setter(false)}, 2000)
}

export const checkWin = (correct: string[], wrong: string[], word: string) => {
    let status = 'win'
    //check for status
    word.split('').forEach(letter => {
        if(!correct.includes(letter)) {
            status = ''
        }
    })

    //check for losss
    if(wrong.length === 6) {
        status = 'lose'
    }

    return status
}