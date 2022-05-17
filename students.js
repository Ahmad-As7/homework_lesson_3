    function students(name , math , chemistry, biology, geography, history){
        let scores = {
            name,
            math,
            chemistry,
            biology,
            geography,
            history,
        }
        return scores
    }

    let anna = students("Anna", 75, 95, 86, 68, 60)
    console.log(anna)
    let john = students("John", 94, 75, 67, 95, 59)
    console.log(john);
    let mike = students("Mike", 54, 60, 58, 49, 'failed' )
    console.log(mike)
