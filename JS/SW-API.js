//Personagens

document.querySelector('#enviar1').addEventListener('click',consulta1);
    

async function consulta1(){
    let num = document.querySelector('#num').value;
    if (num == 0){
        alert("Você não selecionou nenhum personagem")
    }
    else{
    const url1="https://swapi.dev/api/people/"+num+"/"
    try{
        let resposta1 = await fetch(url1);
        let js1 = await resposta1.json();
        mostraDados1(js1);
    }catch {
        console.log("erro1")
    }
}
}       
function mostraDados1(js1){
    const painel = document.querySelector('#mostra1');
    let texto= "<h1>Dados do personagem solicitado:</h1>";
    texto=texto + "Nome: "+ js1.name+"<br>";
    texto=texto + "Altura: "+ js1.height+ " cm"+"<br>";
    texto=texto + "Data de Nascimento: "+ js1.birth_year+"<br>";
    texto=texto + "Gênero: "+ js1.gender+"<br>";
    texto=texto + "Massa: "+ js1.mass+" kg"+"<br>";
    texto+="(Legenda : 'Unknown' = Não se sabe / 'male' = Masculino / 'female' = Feminino / 'n/a' = Não definido)"
    painel.innerHTML = texto;
}

//Planetas

document.querySelector('#enviar2').addEventListener('click',consulta2);
async function consulta2(){
    
    let num2 = document.querySelector('#num2').value;
    if (num2 == 0){
        alert("Você não selecionou nenhum planeta")
    }
    else{
    const url2="https://swapi.dev/api/planets/"+num2+"/"
    try{
        let resposta2=  await fetch(url2);
        let js2 = await resposta2.json();
        mostraDados2(js2);
    }catch {
        console.log("erro2")
    }
}
}       
function mostraDados2(js2){
    const painel2 = document.querySelector('#mostra2');
    let texto2= "<h1>Dados do planeta solicitado:</h1>";
    texto2=texto2 + "Período de Rotação: "+ js2.rotation_period+" horas"+"<br>";
    texto2=texto2 + "Período Orbital: "+ js2.orbital_period+" dias"+"<br>";
    texto2=texto2 + "Clima: "+ js2.climate+"<br>";
    texto2=texto2 + "Terreno: "+ js2.terrain+"<br>";
    texto2=texto2 + "População: "+ js2.population+"<br>";
    texto2+="(Legenda parcial: Unknown = 'Não se sabe')"
    painel2.innerHTML = texto2;
}
