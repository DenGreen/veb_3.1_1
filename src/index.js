export class Character {
    constructor(name, type) {
        if(!name || !type){
            throw Error('Передан пустой элемент');
        }
        this.name = name;
        this.type = type;
    }
}

const varior = new Character("dan", "varior");
const hunter = new Character("trim", "hunter");

export class Team {
    constructor() {
        this.members = new Set();
    }

    add(pers){
        if(this.members.has(pers)){
            throw Error('Нельзя добавлять в команду несколько раз одного и того же персонажа');
        } else {
            this.members.add(pers);
        }

        return this.toArray();
    }

    addAll(...pers) {
        for(const value of pers){
            this.members.add(value);
        }

       return this.toArray();
    }

    toArray() {
        let arr = [];

        for (const size of this.members) {
            arr.push({name: `${size.name}`, type: `${size.type}`})
        }
            
        return arr;
    }
}

const team = new Team();
    
console.log(team.addAll(varior, hunter));