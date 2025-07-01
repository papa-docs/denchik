// values.js

// Основные данные 
var fio               = "Таценкр Валерiй Петров";
var fio_en            = "Tatsenko Valerii";
var birth             = "08.10.1978"; //дата рождения
var date_give         = "03.11.2022"; //Дата видачи
var date_out          = "03.11.2032"; // действителен до
var organ             = "1801"; //орган что выдал документ
var rnokpp            = "2877009110"; //ИНН
var uznr              = "19781008-04493"; //Номер записи
var pass_number       = "008420840"; //номер паспорта

var registeredOn      = "03.11.2022"; //дата регистрации

// Прописка
var legalAdress       = "м. Житомир Вул. Космонавтів, Будинок 6 кв. 16"; //Место проживание
var live              = "м. Житомир, Житомирська область"; //Место рождение 
var bank_adress       = "м. Житомир Вул. Космонавтів, Будинок 6 кв. 16"; //Место жительства указано в банке

var sex               = "Ч";
var sex_en            = "M";

// Данные для Прав
var rights_categories = "B"; //Категории
var prava_number      = "AU729537"; // номер прав
var prava_date_give   = "04.09.2016"; //Дата выдачи Прав
var prava_date_out    = "04.09.2036"; //Действителен ДО
var pravaOrgan        = "6345"; //орган который выдал



var university        = "ХНУ имени Каразина"; // Університет
var fakultet          = "Физико-технический"; // Факультет
var stepen_dip        = "Магістра";
var univer_dip        = "ХНУ имени Каразина";
var dayout_dip        = "01.07.2023";
var special_dip       = "Прикладная математика";
var number_dip        = "MT-545678";
var form              = "Очная";


// заграник
var zagran_number     = "GE696574";


var student_number    = "2022154258";
var student_date_give = "01.09.2021";
var student_date_out  = "30.06.2025";



// Включение/выключение документов
var isRightsEnabled   = true;
var isZagranEnabled   = true;
var isDiplomaEnabled  = false;
var isStudyEnabled    = false;
// Добавь остальные переменные по аналогии

// Пути к нужным фото    ?timestamp=N   "photo.jpg?timestamp=N" динамически: var url = "photo.jpg?timestamp=" + N;

var photo_passport = "1.png"; //эДок, паспорт,
var photo_rights   = "zagran2.png"; //права
var photo_students = "zagran2.png"; //диплом, студ
var photo_zagran   = "zagran.png"; //загран

var signPng           = "sign.png"; //подпись
// Можно добавить еще, если надо

