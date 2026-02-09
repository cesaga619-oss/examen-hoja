//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

    var listLeft6;
    var listLeftHtml6;
    var listRight6;
    var orderLeft6;
    var orderRight6;

    var listLeft9;
    var listLeftHtml9;
    var listRight9;
    var orderLeft9;
    var orderRight9;

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft6 = new CreateListLeft6();
    listLeftHtml6 = new CreateListLeftHtml6();
    listRight6 = new CreateListRight6();
    orderLeft6 = new ShuffleMatchingOrder(listLeft6.length);
    orderRight6 = new ShuffleMatchingOrder(listRight6.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft6, listLeftHtml6, listRight6, orderLeft6, orderRight6, "idDD6", textSelect, hideLeftDropdown);
    $('#matching6').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft6);
    var maxRightSize = GetMaxSizeRightColumn(listRight6);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft6, "idDD6", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft6, "idDD6", hideLeftDropdown);

    listLeft9 = new CreateListLeft9();
    listLeftHtml9 = new CreateListLeftHtml9();
    listRight9 = new CreateListRight9();
    orderLeft9 = new ShuffleMatchingOrder(listLeft9.length);
    orderRight9 = new ShuffleMatchingOrder(listRight9.length);
    var hideLeftDropdown = true;
    var textHtml = CreateMatchingLists(listLeft9, listLeftHtml9, listRight9, orderLeft9, orderRight9, "idDD9", textSelect, hideLeftDropdown);
    $('#matching9').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft9);
    var maxRightSize = GetMaxSizeRightColumn(listRight9);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft9, "idDD9", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft9, "idDD9", hideLeftDropdown);


});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('0ZeJvbkHL3U=', 41, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "En Excel, el puntero del ratón puede cambiar de forma según la acción que se va a realizar. El estado normal del puntero es una cruz amplia blanca, pero al pasar sobre la esquina inferior derecha de una celda, cambia a ...";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ssS05FDVMU8=', 402, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = " ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XQikAa2DaPU=', 404, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = " ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JcQPgsH7J9E=', 796, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = " ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('ccQGSUomiBw=', 798, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = " ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('12f9KYGs9rU=', 159, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "¿Cuáles de las siguientes son funciones estadísticas en Excel? (Puede seleccionar varias)";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('AavfOWYDm34=', 161, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "CONTAR";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('buucfV/U4Uo=', 163, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "PROMEDIO";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('EznpCoh/I2k=', 165, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "MAX";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('1SBuQvWgxWY=', 526, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var choice4 = GetMultipleAnswerChoice(questionIndex, 3);
    if (choice4 === 1) question.noChoice = false;
    var answer4 = new Answer(choice4, valuation4, 1, 0, '');
    answer4.shortTextAnswer = "CONCATENAR";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 2;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('p/rR2fGLvBk=', 528, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "La función =SI( ) se utiliza para evaluar una condición lógica";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('p/rR2fGLvBk=', 528, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Elige la opción correcta:";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 3;
    var weight = DecodeNumber('7+vIaVbvan4=', 374, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Explica con tus propias palabras para qué sirve una tabla dinámica en Excel.";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 4;
    var weight = DecodeNumber('AzXb+NC1Duw=', 297, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Rellena el espacio en blanco en la siguiente oración, utilizando mayúsculas y sin acentos.";
    choice = $('#idGap5_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('DkTVTU5Ckvs='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 5;
    var weight = DecodeNumber('aFexPoo4mDA=', 502, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Selecciona la respuesta correcta en los espacios correspondientes:";
    choice = $('#idGap6_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xCIuNXSL+Kg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap6_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('SLJPOJWh2B0='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 6;
    var weight = DecodeNumber('xS8/NkaCCh0=', 871, 0, 99999);
    var numOfAnswers = 4;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Relaciona el cocepto con su función:";
    question.noChoice = false;
    for (i = 0; i < orderLeft6.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD6", i);
        choice[1] = GetSelextedItemRight("idDD6", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft6.length; j++)
        {
            if (listLeft6[j] === choice[0])
            {
                valuation.push(listRight6[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 7;
    var weight = DecodeNumber('9+TpL3DzLAU=', 717, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Observa la siguiente situación:  En una hoja de Excel tienes los valores de ventas mensuales en las celdas A1:A12. ¿Qué fórmula usarías para obtener el total anual?";
    choice = $('#idGap8_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('EPctNpB3SpCRFORS/+eAdA=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('DcBzRgQA5og=', 1083, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "¿Qué tipo de gráfica de Excel es más adecuada para comparar claramente la magnitud de valores entre varias categorías?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('DcBzRgQA5og=', 1085, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = " ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('H9FjR2Ex/Fs=', 446, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = " ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('H9FjR2Ex/Fs=', 448, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = " ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cjcTOmIMg+o=', 1004, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = " ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 9;
    var weight = DecodeNumber('ymU3JpjABPg=', 699, 0, 99999);
    var numOfAnswers = 8;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Observa la siguiente imagen y relaciona la función con el número correctamente  ";
    question.noChoice = false;
    for (i = 0; i < orderLeft9.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD9", i);
        choice[1] = GetSelextedItemRight("idDD9", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft9.length; j++)
        {
            if (listLeft9[j] === choice[0])
            {
                valuation.push(listRight9[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function CreateListLeft6()
{
    this.length = 4;
    this[0] = 'Match 1';
    this[1] = 'Match 2';
    this[2] = 'Match 3';
    this[3] = 'Match 4';

}

/* Code generated function */
function CreateListRight6()
{
    this.length = 4;
    this[0] = unescape(DecodeString("QIgJUtxZaXg="));
    this[1] = unescape(DecodeString("mFV/fItbI7M="));
    this[2] = unescape(DecodeString("x3XRLlG3fYU="));
    this[3] = unescape(DecodeString("5FrSTPNaIk8="));

}

/* Code generated function */
function CreateListLeftHtml6()
{
    this.length = 4;
    this[0] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Intersecci&#243;n entre una fila y una columna, identificada por una letra y un n&#250;mero.</span></p></span>';
    this[1] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Conjunto de celdas que se seleccionan al mismo tiempo dentro de una hoja de c&#225;lculo.</span></p></span>';
    this[2] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Conjunto de celdas dispuestas de forma horizontal en una hoja de c&#225;lculo.</span></p></span>';
    this[3] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">Conjunto de celdas dispuestas de forma vertical en una hoja de c&#225;lculo.</span></p></span>';

}

/* Code generated function */
function CreateListLeft9()
{
    this.length = 8;
    this[0] = 'Match 1';
    this[1] = 'Match 2';
    this[2] = 'Match 3';
    this[3] = 'Match 4';
    this[4] = 'Match 5';
    this[5] = 'Match 6';
    this[6] = 'Match 7';
    this[7] = 'Match 8';

}

/* Code generated function */
function CreateListRight9()
{
    this.length = 8;
    this[0] = unescape(DecodeString("ZAIpsXf+IqY="));
    this[1] = unescape(DecodeString("cw4Xfu2zc5o="));
    this[2] = unescape(DecodeString("08kz/cKjaec="));
    this[3] = unescape(DecodeString("B/+yrS3iZao="));
    this[4] = unescape(DecodeString("PDfNXEaFZ28="));
    this[5] = unescape(DecodeString("fk4MSu+2+gQ="));
    this[6] = unescape(DecodeString("V8WFfG4mPgQ="));
    this[7] = unescape(DecodeString("JZptl7IYbV4="));

}

/* Code generated function */
function CreateListLeftHtml9()
{
    this.length = 8;
    this[0] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#191;Qu&#233; &#225;rea de Excel muestra el nombre del archivo y el programa? </span></p></span>';
    this[1] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#191;Cu&#225;l es la secci&#243;n donde puedes ingresar f&#243;rmulas y datos de las celdas?</span></p></span>';
    this[2] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#191;Qu&#233; elemento te permite cambiar entre diferentes hojas de c&#225;lculo dentro de un libro?</span></p></span>';
    this[3] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#191;Qu&#233; parte de Excel permite ver la posici&#243;n de la celda seleccionada? </span></p></span>';
    this[4] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#191;Cu&#225;l es la barra que muestra la informaci&#243;n sobre el estado del documento actual? </span></p></span>';
    this[5] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#191;Qu&#233; secci&#243;n en Excel permite insertar una nueva hoja de c&#225;lculo? </span></p></span>';
    this[6] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#191;Cu&#225;l es el componente que permite ajustar el nivel de zoom en la hoja de c&#225;lculo?</span></p></span>';
    this[7] = '<span class=\"quiz_answer_class\"><p><span style=\"background-color:#FFFFFF;font-family:Times New Roman;font-size:12pt;\">&#191;Qu&#233; parte de Excel se utiliza para identificar las columnas en la hoja de c&#225;lculo?</span></p></span>';

}





