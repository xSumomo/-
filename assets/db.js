var dataSet = [
["","&nbsp;","&#160;","неразрывный пробел"],
["","","&#8209;","неразрывный пробел"],
["","&ensp;","&#8194;","узкий пробел (еn-шириной в букву n)"],
["","&emsp;","&#8195;","широкий пробел (em-шириной в букву m)"],
["–","&ndash;","&#8211;","узкое тире (en-тире)"],
["—","&mdash;","&#8212;","широкое тире (em -тире)"],
["­","&shy;","&#173;","мягкий перенос"],
["а́","","&#769;","ударение, ставится после ударной буквы"],
["©","&copy;","&#169;","копирайт"],
["®","&reg;","&#174;","знак зарегистрированной торговой марки"],
["™","&trade;","&#8482;","знак торговой марки"],
["º","&ordm;","&#186;","копье Марса"],
["ª","&ordf;","&#170;","зеркало Венеры"],
["‰","&permil;","&#8240;","промилле"],
["π","&pi;","&#960;","пи (используйте Times New Roman)"],
["¦","&brvbar;","&#166;","вертикальный пунктир"],
["§","&sect;","&#167;","параграф"],
["°","&deg;","&#176;","градус"],
["µ","&micro;","&#181;","знак микро"],
["¶","&para;","&#182;","знак абзаца"],
["…","&hellip;","&#8230;","многоточие"],
["‾","&oline;","&#8254;","надчеркивание"],
["´","&acute;","&#180;","знак ударения"],
["№","","&#8470;","знак номера"],
["🔍","","&#128269;","Лупа (наклонённая влево)"],
["🔎","","&#128270;","Лупа (наклонённая вправо)"],
["☎","","&#9742;","Телефон"],
["💾","","&#128190;","Дискета"],
["🛠","","&#128736;","Молоток и гаечный ключ, настройка"],
["🔒","","&#128274;","Замок закрыт"],
["🔓","","&#128275;","Замок открыт"],
["🔔","","&#128276;","Колокольчик"],
["🔕","","&#128277;","Колокольчик перечеркнутый"],
["🗑","","&#128465;","Урна"],
["×","&times;","&#215;","умножить"],
["÷","&divide;","&#247;","разделить"],
["<","&lt;","&#60;","меньше"],
[">","&gt;","&#62;","больше"],
["±","&plusmn;","&#177;","плюс/минус"],
["¹","&sup1;","&#185;","степень 1"],
["²","&sup2;","&#178;","степень 2"],
["³","&sup3;","&#179;","степень 3"],
["¬","&not;","&#172;","отрицание"],
["¼","&frac14;","&#188;","одна четвертая"],
["½","&frac12;","&#189;","одна вторая"],
["¾","&frac34;","&#190;","три четверти"],
["⁄","frasl;","&#8260;","дробная черта"],
["−","minus;","&#8722;","минус"],
["≤","&le;","&#8804;","меньше или равно"],
["≥","&ge;","&#8805;","больше или равно"],
["≈","&asymp;","&#8776;","приблизительно (почти) равно"],
["≠","&ne;","&#8800;","не равно"],
["≡","&equiv;","&#8801;","тождественно"],
["√","&radic;","&#8730;","квадратный корень (радикал)"],
["∞","&infin;","&#8734;","бесконечность"],
["∑","&sum;","&#8721;","знак суммирования"],
["∏","&prod;","&#8719;","знак произведения"],
["∂","&part;","&#8706;","частичный дифференциал"],
["∫","&int;","&#8747;","интеграл"],
["∀","&forall;","&#8704;","для всех (видно только если жирным шрифтом)"],
["∃","&exist;","&#8707;","существует"],
["∅","&empty;","&#8709;","пустое множество"],
["Ø","&Oslash;","&#216;","диаметр"],
["∈","&isin;","&#8712;","принадлежит"],
["∉","&notin;","&#8713;","не принадлежит"],
["∋","&ni;","&#8727;","содержит"],
["⊂","&sub;","&#8834;","является подмножеством"],
["⊃","&sup;","&#8835;","является надмножеством"],
["⊄","&nsub;","&#8836;","не является подмножеством"],
["⊆","&sube;","&#8838;","является подмножеством либо равно"],
["⊇","&supe;","&#8839;","является надмножеством либо равно"],
["⊕","&oplus;","&#8853;","плюс в кружке"],
["~","&#126;","",""]
];

$(document).ready(function() {
    $('#html-special-characters').DataTable( {
        "sort": false, // выключить сортировку
		"bLengthChange": false, // убрать меню выбора количества записей
		"pagingType": "simple", // тип пагинации
		"pageLength": 20, // количество отображаемых строк
		stateSave: true, // сохранение состояния таблицы после перезагрузки страницы
		data: dataSet,
		columns: [
            { title: "Символ" },
            { title: "Мнемоника" },
            { title: "Код" },
            { title: "Описание" },
        ],
		  "oLanguage": {
                  "sProcessing":"Подождите...",
                  "sLengthMenu":"Показать _MENU_ записей",
                  "sZeroRecords":"Записи отсутствуют.",
                  "sEmptyTable":"Записи отсутствуют.",
                  "sInfo":"Записи с _START_ до _END_ из _TOTAL_ ",
                  "sInfoEmpty":"Записи с 0 до 0 из 0 ",
                  "sInfoFiltered":"(в _MAX_)",
                  "sInfoPostFix":"",
                  "sSearch":"Поиск: ",
                  "sUrl": "",
                  "oPaginate": {
                      "sFirst":"Первая",
                      "sPrevious":"Предыдущая",
                      "sNext":"Следующая",
                      "sLast":"Последняя"
                  }
              }
    });
});
