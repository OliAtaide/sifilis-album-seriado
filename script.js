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
    for (let i = 0; i < respostas.length; i++) {
        var fb;
        switch (respostas[i]) {
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

function renderQuestoes(texto) {
    for (let i = 1; i <= 10; i++) {
        $('.form').append(
            `<h6 class="fw-bold mt-3">Questão ` + i + `</h6>
        <div class="row my-2">
            <div class="col col-12 col-md-4"><img class="img-fluid" src="../images/` + texto + `/questao-` + i + `.png" alt=""></div>
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

function alerta(index, texto) {
    $('.alternativas-questao-' + index).prepend(
        '<span class="text-danger fw-bold mb-3">'
            + texto +
        '</span>'
    );
}

function enviarRespostas(respostas, err_msg) {
    window.scrollTo(0, 0);
    
    
    $(".form-check-input").prop("disabled", true);
    var erros = 0, acertos = 0;

    for (let i = 1; i <= 10; i++) {
        var r = $("input[name='questao" + i + "']:checked");
        var l = $("label[for='questao" + i + "-" + r.val() + "']");
        l.addClass("checked");
        r.removeClass("radio-button");
        if (r.val() == respostas[i - 1]) {
            r.addClass("right");
            acertos++;
        }
        else {
            if (
                r.val() != undefined) {
                r.addClass("wrong");
                erros++;
                var vr = $("#questao" + i + "-" + respostas[i - 1]);
                var vl = $("label[for='questao" + i + "-" + respostas[i - 1] + "']");

                vr.addClass("right");
                vl.addClass("checked");

                alerta(i, err_msg);
            }
            else {
                $("input[name='questao" + i + "']").addClass("unchecked");
                alerta(i, "Pergunta não respondida!");
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