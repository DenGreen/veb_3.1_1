import { Character, Team } from './index';

const varior = new Character("dan", "varior");
const hunter = new Character("trim", "hunter");

test('Team.add должен возвращять объект типа {name: "dan", type: "varior"}', () =>{
    const expected = [{name: "dan", type: "varior"}];
    const team = new Team();

    const received = team.add(varior);
    expect(received).toEqual(expected);
})

test('Team.add должен возвращять объект типа {name: "trim", type: "hunter"}', () =>{
    const expected = [{name: "trim", type: "hunter"}];
    const team = new Team();

    const received = team.add(hunter);
    expect(received).toEqual(expected);
})


test('Team.add должен выбрасывать ошибку', () =>{
    const team = new Team();
    function received() {
        team.add(varior);
        team.add(varior);
    }
    expect(received).toThrowError(new Error('Нельзя добавлять в команду несколько раз одного и того же персонажа'));
})

test('Team.toArray должен производить конвертацию Set в массив', () =>{
    const expected = [
        {name: "dan", type: "varior"},
        {name: "trim", type: "hunter"}
    ];
    const team = new Team();

    const received = team.addAll(varior, hunter);
    expect(received).toEqual(expected);
})

test('Character должен выбрасывать ошибку', () =>{
    function received() {
        const varior = new Character();
        return varior;
    }
    expect(received).toThrowError(new Error('Передан пустой элемент'));
})