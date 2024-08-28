let campoIdade;
let campoFantasia;

function setup() {
    createCanvas(400, 400);
    campoIdade = createInput("15");
    campoFantasia = createCheckbox("Gosta de Fantasia ?");
}


function draw() {
    background(220);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "Meu amigo Enzo";
        } else {
            if(gostaDeFantasia){
                return "Saga Velozes e Furiosos";
            } else {
                return "X - Men - O Filme";
            }
        }
    } else {
        if(gostaDeFantasia) {
            return "Saga Como Treinar o seu Dragão";
        } else {
            return "Ratatouille";
        }
    }
}

