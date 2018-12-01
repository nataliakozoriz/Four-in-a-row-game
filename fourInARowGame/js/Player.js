class Player{
    constructor(name, color, id, active = false){
        this.name = name;
        this.color = color;
        this.id = id;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    createTokens(num){
        const tokens = [];
        
        for (let i = 0; i < num; i++){
            let token = new Token(i, this);
            tokens.push(token);

        }
        return token;
    }
}