import { Character, Team } from './index';

const varior = new Character("dan", "varior");
const hunter = new Character("trim", "hunter");

test('TeamTest1', () =>{
    const expected = [{name: "dan", type: "varior"}];
    const team = new Team();

    const received = team.add(varior);
    expect(received).toEqual(expected);
})

test('TeamTest2', () =>{
    const team = new Team();
    function received() {
        team.add(varior);
        team.add(varior);
    }
    expect(received).toThrowError(new Error('Нельзя добавлять в команду несколько раз одного и того же персонажа'));
})

test('TeamTest3', () =>{
    const expected = [
        {name: "dan", type: "varior"},
        {name: "trim", type: "hunter"}
    ];
    const team = new Team();

    const received = team.addAll(varior, hunter);
    expect(received).toEqual(expected);
})