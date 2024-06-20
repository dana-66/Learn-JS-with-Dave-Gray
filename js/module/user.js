
export default class  user{
    constructor (email, name) {
        this._id = email;
        this._name = name;
    }

    greetings () {
        return `Hi, my name is ${this._name}.`;
    }
}