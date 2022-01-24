// Pré-Teste e Pós-Teste
var feedback = {
    a: `Manifestações Dermatológicas da Sífilis Primária.
    Essa fase é caracterizada ´pela presença da lesão inicial da sífilis primária que é denominada cancro duro ou protossifiloma. 
    Surge, em média, 3 semanas após a infecção, podendo, inclusive, não aparecer ou surgir após um período maior, em torno de 40 dias.
    Em 15% a 30% dos casos, o cancro não é percebido pelo paciente ou pode ser atípico.
    Caracteriza-se por ser indolor, único, erosado, de fundo limpo, ou com pouca serosidade, avermelhado, com base e bordas endurecidas`,

    b: `Manifestações Dermatológicas da Sífilis Secundária.
    Essa fase é caracterizada pela disseminação de treponemas pelo organismo.
    Na sífilis secundária as manifestações ocorrem de 4 a 8 semanas após o aparecimento do cancro duro.
    A lesão de pele mais precoce é constituída por exantema morbiliforme não pruriginoso:
    é a denominada roséola sifilítica, caracterizada por máculas eritematosas, portanto, sem relevo.
    Muitas vezes, vem acompanhada de mal-estar, dores articulares, cefaleia e polimicroadenopatia, especialmente na região cervical e epitrocleana.
    Essas lesões regridem espontaneamente devido à formação de anticorpos transitórios pelo organismo infectado, o que pode desestimular o doente a procurar o serviço médico.
    Posteriormente, podem surgir lesões papulosas eritematosas, disseminadas pelo tronco e atingindo também a região palmoplantar.
    Essa região, quando acometida, é de grande valor diagnóstico, sendo maior a probabilidade de se tratar de sífilis, embora não seja um sinal patognomônico.`,

    c: `Manifestações Dermatológicas da Sífilis Terciária.
    Essa fase é caracterizada por processo inflamatório importante com destruição tecidual.
    A sífilis, considerada terciária, ocorre em doentes não tratados ou que receberam terapêutica inadequada, em 15% a 25% dos casos. 
    As manifestações clínicas podem surgir nos primeiros 2 anos após a sífilis secundária.
    São as chamadas lesões precoces. Também podem surgir até 40 anos após essa fase, mas, em geral, surgem entre 2 e 7 anos após o secundarismo.
    Caracteriza-se por lesões nodulares, nódulo-ulceradas e gomas, onde raramente são encontrados treponemas.
    As reações sorológicas, nessa fase, são reagentes.
    As lesões de pele nodulares e nódulo-ulceradas costumam ser agrupadas, formando placas serpiginosas e policíclicas.
    Podem ser recobertas por crostas e descamação, assumindo um aspecto psoriasiforme.
    Nas áreas cicatriciais, podem ocorrer hiperpigmentação, hipopigmentação e atrofia.
    As lesões gomosas caracterizam-se por nódulos que necrosam no centro, formando ulcerações destrutivas, circulares, às vezes com material necrótico aderente e que cicatrizam de 1 a 2 meses.
    Quando a goma se localiza na região peniana, é denominada “pseudo cancro redux”; e quando se localiza sobre a cicatriz do cancro duro, é o “cancro redux”.`

}

function showFeedback() {
    for (let i = 0; i < aleatorias.length; i++) {
        var fb;
        switch (aleatorias[i].resposta) {
            case 'a':
                fb = feedback.a;
                break;
            case 'b':
                fb = feedback.b;
                break;
            case 'c':
                fb = feedback.c;
                break;
        }
        $('.alternativas-questao-' + (i + 1)).append('<span class="mt-3"><small><strong>Feedback: </strong>' + fb + '</strong></span>');
    }
}

function alerta(index, texto, bool) {
    var color;
    if (bool) {
        color = 'text-success';
    }
    else{
        color = 'text-danger';
    }
    $('.alternativas-questao-' + index).prepend(
        '<span class="'
        + color +
        ' fw-bold mb-3">'
        + texto +
        '</span>'
    );
    
}

var questoes = [
    {
        image: '../images/sifilis/1-1.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/1-2.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/1-3.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/1-4.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/1-5.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/1-6.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/1-7.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/1-8.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/1-9.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/1-10.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/2-1.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-2.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-3.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-4.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-5.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-6.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-7.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-8.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-9.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-10.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-11.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-12.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-13.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-14.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-15.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-16.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-17.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-18.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-19.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-20.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-21.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-22.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-23.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/2-24.png',
        resposta: 'b',
    },
    {
        image: '../images/sifilis/3-1.png',
        resposta: 'c',
    },
    {
        image: '../images/sifilis/3-2.png',
        resposta: 'c',
    },
    {
        image: '../images/sifilis/3-3.png',
        resposta: 'c',
    },
    {
        image: '../images/sifilis/3-4.png',
        resposta: 'c',
    },
    {
        image: '../images/sifilis/3-5.png',
        resposta: 'c',
    },
    {
        image: '../images/sifilis/3-6.png',
        resposta: 'c',
    },
    {
        image: '../images/sifilis/3-7.png',
        resposta: 'c',
    },
    {
        image: '../images/sifilis/1-8.png',
        resposta: 'a',
    },
    {
        image: '../images/sifilis/3-9.png',
        resposta: 'c',
    },
    {
        image: '../images/sifilis/3-10.png',
        resposta: 'c',
    },
]

var aleatorias = []

function getRandom() {
    while(aleatorias.length != 10){
        var questao = questoes[Math.floor(Math.random() * questoes.length)];
        if (!aleatorias.includes(questao)) {
            aleatorias.push(questao);
        }
    }
}

function randomQuestoes(texto) {
    getRandom();
    for (let i = 1; i <= 10; i++) {
        $('.form').append(
            `<h6 class="fw-bold mt-3">Questão ` + i + `</h6>
        <div class="row my-2">
            <div class="col col-12 col-md-4"><img class="img-fluid" src="` + aleatorias[i-1].image + `" alt=""></div>
            <div class="col col-12 col-md-6 alternativas-questao-` + i + ` m-3 d-flex flex-column justify-content-center">
                <div class="form-check m-2">
                    <input class="radio-button form-check-input" type="radio" name="questao` + i + `" value="a" id="questao` + i + `-a">
                        <label class="form-check-label ms-3" for="questao` + i + `-a">
                            Manifestações Dermatológicas da Sífilis Primária
                        </label>
                </div>
                <div class="form-check m-2">
                    <input class="radio-button form-check-input" type="radio" name="questao` + i + `" value="b" id="questao` + i + `-b">
                        <label class="form-check-label ms-3" for="questao` + i + `-b">
                            Manifestações Dermatológicas da Sífilis Secundaria
                        </label>
                </div>
                <div class="form-check m-2">
                    <input class="radio-button form-check-input" type="radio" name="questao` + i + `" value="c" id="questao` + i + `-c">
                        <label class="form-check-label ms-3" for="questao` + i + `-c">
                            Manifestações Dermatológicas da Sífilis Teciária
                        </label>
                </div>
            </div>
        </div>
        `
        )
    }
}

function randomRespostas(err_msg, ok_msg) {
    window.scrollTo(0, 0);
    $(".form-check-input").prop("disabled", true);
    var erros = 0, acertos = 0;

    for (let i = 1; i <= 10; i++) {
        var r = $("input[name='questao" + i + "']:checked");
        var l = $("label[for='questao" + i + "-" + r.val() + "']");
        l.addClass("checked");
        r.removeClass("radio-button");
        if (r.val() == aleatorias[i - 1].resposta) {
            r.addClass("right");
            acertos++;
            alerta(i, ok_msg, true);
        }
        else {
            if (
                r.val() != undefined) {
                r.addClass("wrong");
                erros++;
                var vr = $("#questao" + i + "-" + aleatorias[i - 1].resposta);
                var vl = $("label[for='questao" + i + "-" + aleatorias[i - 1].resposta + "']");

                vr.addClass("right");
                vl.addClass("checked");

                alerta(i, err_msg, false);
            }
            else {
                $("input[name='questao" + i + "']").addClass("unchecked");
                alerta(i, "Pergunta não respondida!", false);
            }
        }
    }
    $('.form').append(
        `<div class="resultado mt-5">
            <h5 class="fw-bold text-center">
                <span class="mx-3">Total de erros: <span class="text-danger">` + erros + `</span></span>   
                <span class="mx-3">Total de acertos: <span class="text-success">` + acertos + `</span></span>
            </h5>
        </div>`
    )
}

// Unidade

var conteudo = [
    [
        {
            descricao: 'Úlcera indolor, com bordas elevadas e bem delimitadas, fundo eritematoso, localizada no pênis.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Úlcera indolor, com bordas elevadas e bem delimitadas, não secretiva (“aspecto limpo”), no corpo do pênis. Nota-se presença de área avermelhada ao seu redor.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Úlcera indolor, de bordas elevadas e bem delimitadas, não-secretiva, localizada na região de grande lábio direito.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Úlcera eritematosa, indolor, com borda endurecida, em falange distal do segundo quirodáctilo de mão direita.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: `a)	Úlcera indolor, com bordas elevadas, sem secreção, próxima à glande.<br/>
                    b)	Presença concomitante de vesículas dolorosas agrupadas, avermelhadas, localizadas na borda da glande. (Herpes genital)`,
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Úlcera bem delimitada, indolor, rodeada por área eritematosa, de fundo amarelado, localizada em mucosa labial superior.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: `a)	Úlcera com fundo amarelado, indolor, borda irregular, localizada no frênulo prepucial, com edema circundando a lesão. (Cancro duro - Sífilis)<br/>
                    b)	Presença de pequenas úlceras e vesículas dolorosas, eritematosas, disseminadas na glande. (Herpes Genital)<br/>
                    c)	Secreção esbranquiçada em orifício peniano. (Uretrite gonocócica)`,
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Úlcera crateriforme, indolor, com bordas elevadas e esbranquiçadas, com fundo limpo, na região lateral esquerda da língua.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Presença de úlcera limpa, indolor, bem delimitada, com bordas esbranquiçadas na ponta da língua.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        }
    ],
    [
        {
            descricao: 'Presença de áreas de alopecia (ausência de cabelos) no couro cabeludo, com superfície lisa, múltiplas e de diferentes tamanhos. Não há descamação nem prurido.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Placas mucosas, esbranquiçadas, irregulares, na região de palato mole e duro.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Placa esbranquiçada com superfície irregular, enrugada, indolor, na lateral direita da língua.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Presença de exantema maculopapular localizado no tronco e abdome.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Maculopapulas eritematosas em região palmoplantar.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: `a) Presença de nódulos ulcerados, eritematosos na região anal, que é um local de dobra em mucosa, onde caracteristicamente surgem as lesões denominadas sifílides.<br/>
                        b) abaulamento em região inguinal esquerda, denotando linfadenopatia local, comum na forma secundária da  sífilis.`,
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Pequenas placas arredondadas, caracterizadas por descamação periférica, na região palmo-plantar.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Criança de 3 anos de idade apresentando máculas e pápulas eritematosas na região genital.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Criança de 9 anos de idade apresentando placas vegetantes, de aspecto úmido e superfície lisa na região anal. Sifílides.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Presença de nódulos, alguns ulcerados, outros íntegros, em região genital.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Múltiplas placas vegetantes, formadas por pápulas e nódulos na região anal. Estas lesões são tipicamente indolores, mas neste caso, havia intenso prurido devido à associação com escabiose.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Hiperceratose palmo-plantar, eritematosa e simétrica. Este paciente também apresentava lesões genitais, mas com diferente aspecto: predominantemente pápulo-nodular e ulcerado.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Extensa placa erosiva, iniciando-se desde lábio menor e estendendo-se inferiormente a toda região perianal. Apecto úmido da lesão é notável, tratando-se de sifílide.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: `<strong>Imagem a:</strong> 
                        Presença de nódulos indolores disseminados desde a região nucal ao dorso, de coloração violácea, sem úlcera ou descamação.
                        <br/><strong>Imagem b:</strong> 
                        Melhora importante das lesões, após tratamento adequado.
                        `,
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Presença de máculo-pápulas eritematosas, bem delimitadas, seguindo um padrão predominantemente monomórfico, disseminadas no tronco.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Presença de máculo-pápulas eritematosas, bem delimitadas, seguindo um padrão predominantemente monomórfico, disseminadas no tronco. ',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Grande placa vegetante, exofítica, úmidas, com supefície irregular, na região anal.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Placa esbranquiçada, úmida, indolor, bem definida, na mucosa labial.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Presença de nódulos múltiplos na região genital, todos de aspecto úmido, alguns ulcerados, outros com superfície intacta. Neste caso, há descarga vaginal por presença de infecção concomitante.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Placas eritematosas vegetantes, úmidas, indolores, em região perianal, estendendo-se centrifugamente, denotando a contagiosidade destas lesões. ',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Rarefação de supercílios, mais evidente na região caudal da sobrancelha (madarose). Na sífilis, a madarose é conhecida como ‘Sinal de Fournier”.',
            fonte: '<a href="http://www.atlasdermatologico.com.br/img?imageId=6965">http://www.atlasdermatologico.com.br/img?imageId=6965</a>'
        },
        {
            descricao: 'Presença de nódulos indolores, eritematosos, sem descamação, na região da barba, que podem facilmente passar despercebidos.',
            fonte: '<a href="http://www.atlasdermatologico.com.br/img?imageId=7039">http://www.atlasdermatologico.com.br/img?imageId=7039</a>'
        },
        {
            descricao: 'Pápulas eritêmato-escamosas na região cervical, onde podemos perceber  a presença de linfonodomegalias, o que é um achado frequente na sífilis.',
            fonte: '<a href="http://www.atlasdermatologico.com.br/img?imageId=6970">http://www.atlasdermatologico.com.br/img?imageId=6970</a>'
        },
        {
            descricao: 'Múltiplas pápulas de coloração eritêmato-violácea, muitas coalescendo, deixando um aspecto “infiltrado” na face da paciente. É importante notar que as roséolas sifilíticas ou nódulos sifilíticos podem adquirir uma coloração mais arroxeada em peles mais escuras.',
            fonte: '<a href="http://www.atlasdermatologico.com.br/img?imageId=8993">http://www.atlasdermatologico.com.br/img?imageId=8993</a>'
        }
    ],
    [

        {
            descricao: 'Múltiplas pápulas de coloração eritêmato-violácea, muitas coalescendo, deixando um aspecto “infiltrado” na face da paciente. É importante notar que as roséolas sifilíticas ou nódulos sifilíticos podem adquirir uma coloração mais arroxeada em peles mais escuras.',
            fonte: '<a href="http://www.atlasdermatologico.com.br/img?imageId=7086">http://www.atlasdermatologico.com.br/img?imageId=7086</a>'
        },
        {
            descricao: 'Presença de perfuração (fístula) em palato duro, indolor, com leve eritema perilesional.',
            fonte: '<a href="http://www.tti.library.tcu.edu.tw/DERMATOLOGY/ba/ba0057f.htm">http://www.tti.library.tcu.edu.tw/DERMATOLOGY/ba/ba0057f.htm</a>'
        },
        {
            descricao: 'Presença de grande perfuração (fístula), indolor, x em palato duro.',
            fonte: 'PASSOS, Mauro Romero Leal (Ed.). Atlas of sexually transmitted diseases: clinical aspects and differential diagnosis. Springer, 2017'
        },
        {
            descricao: 'Placas ulceradas, com bordas bem elevadas e infiltradas, com presença de secreção em seu interior, decorrente da intensa reação inflamatória e necrose tecidual.',
            fonte: '<a href="http://atlasdermatologico.com.br/img?imageId=7085">http://atlasdermatologico.com.br/img?imageId=7085</a>'
        },
        {
            descricao: 'Erupção papuloescamosa eritematosa, com lesões ovaladas e descamação fina central disseminadas no tronco.',
            diagnostico: 'Pitiríase Rósea',
            diagnostico_diferencial: `O padrão “árvore de Natal” que ocorre em alguns casos em dorso sugere o diagnóstico de pitiríase rósea.<br/>
                                        A descamação central das lesões também sugere PR, uma vez que na sífilis a descamação é na periferia das lesões (Colarete de Biet)`,
            fonte: '<a href="http://www.atlasdermatologico.com.br/img?imageId=5620">http://www.atlasdermatologico.com.br/img?imageId=5620</a>'
        },
        {
            descricao: 'Úlceras dolorosas de base purulenta, bordas eritematosas, amolecidas e escavadas em glande.',
            diagnostico: 'Cancróide',
            diagnostico_diferencial: 'Geralmente na sífilis temos um padrão de lesão única, indolor, de fundo limpo e que regride sem deixar cicatriz.',
            fonte: '<a href="http://www.atlasdermatologico.com.br/img?imageId=948">http://www.atlasdermatologico.com.br/img?imageId=948</a>'
        },
        {
            descricao: 'Úlceras de bordas eritematosas e bem delimitadas em região vulvar.',
            diagnostico: 'Herpes Simplex',
            diagnostico_diferencial: 'Na Herpes, as úlceras são precedidas por lesões vesiculosas e geralmente recorrentes ',
            fonte: '<a href="http://www.atlasdermatologico.com.br/img?imageId=2580">http://www.atlasdermatologico.com.br/img?imageId=2580</a>'
        },
        {
            descricao: 'Patches e placas eritematosas, finamente descamativas de tamanhos variáveis em região de abdomen, dorso e mama. ',
            diagnostico: 'Micose Fungóide',
            diagnostico_diferencial: 'Geralmente as lesões da MF se desenvolvem em regiões cobertas do corpo. Com a progressao da doença, as placas se tornam descamativas e infiltradas e crescem de forma gradual, anular policíclica ou em ferradura.',
            fonte: '<a href="http://www.atlasdermatologico.com.br/img?imageId=4575">http://www.atlasdermatologico.com.br/img?imageId=4575</a>'
        },
        {
            descricao: 'Pápulas e placas eritematoescamosas, bem definidas em região torácica posterior.',
            diagnostico: 'Psoríase Gutata',
            diagnostico_diferencial: 'Pela curetagem metódica de Brocq, obtem-se dois achados clínicos bastante sugestivos dessa dermatose: sinal da vela (estratificação das escamas) e sinal do orvalho sangrante (pequenos pontos sangrantes quando a escama é removida).',
            fonte: '<a href="https://upload.wikimedia.org/wikipedia/commons/4/48/Guttate_psoriasis.jpg">https://upload.wikimedia.org/wikipedia/commons/4/48/Guttate_psoriasis.jpg</a>'
        },
        {
            descricao: 'Máculas e pápulas eritematosas disseminadas no corpo.',
            diagnostico: 'Farmacodermia',
            diagnostico_diferencial: 'O início abrupto associado ao uso de fármacos sugerem o diagnóstico.',
            fonte: '<a href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Amoxicillin_rash_11_hours_after_17th_dose.JPG/640pxAmoxicillin_rash_11_hours_after_17th_dose.JPG">https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Amoxicillin_rash_11_hours_after_17th_dose.JPG/640pxAmoxicillin_rash_11_hours_after_17th_dose.JPG</a>'
        },
    ]
]

function onChange() {
    window.scrollTo(0, 0);
    if (swiper.realIndex == '0') {
        $('.prev').hide();
        $('.pre-teste').show();
    }
    else {
        $('.prev').show();
        $('.pre-teste').hide();
    }
    if (swiper.realIndex == '2') {
        $('.next').hide();
        $('.pos-teste').show();
    }
    else {
        $('.next').show();
        $('.pos-teste').hide();
    }
}

function imprimirDado(titulo, texto) {
    if (texto != null) {
        return '</p><p><strong>' + titulo + '</strong><br />' + texto + '</p>'
    }
    return "";
}

function imprimirUnidade() {
    for (let i = 0; i < conteudo.length; i++) {
        for (let j = 0; j < conteudo[i].length; j++) {
            $('.slide-' + (i + 1)).append(
                `<div class="card p-3 my-3">
                <div class="row">
                    <div class="col col-12 col-md-6">
                        <div class="d-flex justify-content-center">
                            <img class='img-fluid justify-self-center' src="../images/sifilis/` + (i + 1) + '-' + (j + 1) + `.png" alt="">
                        </div>
                    </div>
                    <div class="col col-12 col-md-6">
                        <div class="d-flex flex-column justify-content-center h-100">
                            `
                + imprimirDado('DESCRIÇÃO DA LESÃO:', conteudo[i][j].descricao)

                + imprimirDado('DIAGNOSTICO:', conteudo[i][j].diagnostico)

                + imprimirDado('DIAGNOSTICO DIFERENCIAL:', conteudo[i][j].diagnostico_diferencial)

                + imprimirDado('FONTE:', conteudo[i][j].fonte) +
                `
                        </div>
                    </div>
                </div>
            </div> `
            );
        }
    }
}