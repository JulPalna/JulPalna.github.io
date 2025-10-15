//вводим курсы валют
let RUR_currency=1.0;
let EUR_currency=94.7030;
let USD_currency=81.4103;
let CNY_currency=11.3642;
let KZT_currency=15.07434;
//зададим массив курсов
let numRows = 5;
let numCols = 5;

let regex =/^\d+$/;
//ввод числа
document.getElementById('Currency').innerHTML = "Выберите валюту и введите сумму";
const myElementOn = document.getElementById('mySum');
const myElementOn_text = document.getElementById('mySum_text');
const myElementOff = document.getElementById('Result');
const myElementOff_text = document.getElementById('Result_text');

//console.log(myElementOn.style.display);
//console.log(myElementOn_text.style.display);
//console.log(myElementOff.style.display);
//console.log(myElementOff_text.style.display);
const Firstclick=false;//еще ни разу не вводили число
document.addEventListener('DOMContentLoaded', function() {
  console.log('Страница была только что открыта (HTML загружен).');
  
  //myElementOn.style.display = 'flex';
  //myElementOn_text.style.display = 'none';
  //myElementOff.style.display = 'flex';
  //myElementOff_text.style.display = 'none';
  document.getElementById('Currency').innerHTML = "Выберите валюту и введите сумму";
});

const initialize2DArray = (width, height, value = null) => {
  return Array.from({ length: height }).map(() => Array.from({ length: width }).fill(value));
};

let Currency_matrix = initialize2DArray(numRows, numCols, 0);
console.log(Currency_matrix);
let Currency_kurs=[RUR_currency,USD_currency, EUR_currency,CNY_currency,KZT_currency];


for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        Currency_matrix[i][j] = Math.ceil(Currency_kurs[i]/Currency_kurs[j]*10000)/10000; // Заполняем ячейки, например, нулями
        console.log(Currency_matrix[i][j]);
  }
}
//когда не выбрана валюта - в первом блоке написано

let OnC_c=-1; //код валюты входящий
let OnC_t=""; //текстовое обозначение валюты входящее
let OffC_c=-1; //код валюты исходящей
let OffC_t=""; //текстовое обозначение валюты исхдящей

var OnCursCurrency = [0,1,2,3,4];
var OnCursCurrencyText=['RUR','USD','EUR','CHY','KZT'];
const InCur=document.querySelectorAll('input[name="mycurrency"]');
console.log(InCur);
InCur.forEach((item) => {
      item.addEventListener('change', function () {
           const {value} = this;
           console.log("нажали кнопку1"+Firstclick);
          // document.getElementById('MySum_text').innerHTML = Number(element.value);
      if (value == 'USD') {

              OnC_c=OnCursCurrency[1];
              OnC_t=OnCursCurrencyText[1];}
      else if (value == 'RUR') {

              OnC_c=OnCursCurrency[0];
              OnC_t=OnCursCurrencyText[0];}  
              
       else if (value == 'EUR') {

              OnC_c=OnCursCurrency[2];
              OnC_t=OnCursCurrencyText[2];} 
       else if (value == 'CNY') {

              OnC_c=OnCursCurrency[3];
              OnC_t=OnCursCurrencyText[3];}  
              
       else if (value == 'KZT') {

              OnC_c=OnCursCurrency[4];
              OnC_t=OnCursCurrencyText[4];}         
              
if (!Firstclick){//проверяем, что поле ввода ни разу не нажималось
      if (!Object.keys(element.value).length&&OnC_c>=0&&OffC_c>=0) {//обе валюты выбраны
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму";
      }
      else if (!Object.keys(element.value).length&&OffC_c==-1&&OnC_c>=0) {//выбрана валюта 1
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму";
        document.getElementById('Currency_ch').innerHTML = "Выберите валюту для обмена";
      }
      else if (!Object.keys(element.value).length&&OnC_c==-1&&OffC_c>=0) {//выбрана валюта 2
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму и валюту";
        document.getElementById('Currency_ch').innerHTML = "Выберите валюту для обмена";} 
      }
        
  else {console.log("выбрана одна валюта");
      
      if (OnC_c>=0&&OffC_c>=0) {//обе валюты выбраны
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму";
        document.getElementById('Currency_ch').innerHTML = "";
      }
      else if (OffC_c==-1&&OnC_c>=0) {//выбрана валюта 1
        console.log("выбрана одна валюта");
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму";
        document.getElementById('Currency_ch').innerHTML = "Выберите валюту для обмена";
      }
      else if (OnC_c==-1&&OffC_c>=0) {//выбрана валюта 2
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму и валюту";
        document.getElementById('Currency_ch').innerHTML = "Выберите валюту для обмена";} }      
      if (regex.test(element.value)){     
           if (value == 'USD') {

              OnC_c=OnCursCurrency[1];
              OnC_t=OnCursCurrencyText[1];
              console.log("Зашли в цикл выбора валюты доллар "+element.value);
              

              if (OffC_c==-1) { //если вторая валюта еще не выбрана
                 document.getElementById('Currency_ch').innerHTML = "выберите валюту для конвертации";
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = 1 "+OnC_t;
                 }
              else {
                document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
                document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t;
                document.getElementById('Result').innerHTML = Math.ceil(Number(element.value)*Currency_matrix[OnC_c][OffC_c]*100)/100;}
                 
             } else if (value == 'RUR') {

                 OnC_c=OnCursCurrency[0];
                 OnC_t=OnCursCurrencyText[0];

                 if (OffC_c==-1) {
                 document.getElementById('Currency_ch').innerHTML = "выберите валюту для конвертации";
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = 1 "+OnC_t;}
                 else {
                 console.log(OffC_c);
                document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
                document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t;
                document.getElementById('Result').innerHTML = Math.ceil(Number(element.value)*Currency_matrix[OnC_c][OffC_c]*100)/100;}
      
          } else if (value == 'EUR') {
      
             OnC_c=OnCursCurrency[2];
             OnC_t=OnCursCurrencyText[2];

             if (OffC_c==-1) {
                 document.getElementById('Currency_ch').innerHTML = "выберите валюту для конвертации";
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = 1 "+OnC_t;}
                 else {
                 console.log(OffC_c);
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
                 document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t;
                 document.getElementById('Result').innerHTML = Math.ceil(Number(element.value)*Currency_matrix[OnC_c][OffC_c]*100)/100;}
      
         } else if (value == 'CNY') {
     
             OnC_c=OnCursCurrency[3];
             OnC_t=OnCursCurrencyText[3];

             if (OffC_c==-1) {
                 document.getElementById('Currency_ch').innerHTML = "выберите валюту для конвертации";
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = 1 "+OnC_t;}
                 else {
                 console.log(OffC_c);
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
                 document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t;
                 document.getElementById('Result').innerHTML = Math.ceil(Number(element.value)*Currency_matrix[OnC_c][OffC_c]*100)/100;}
      
        } else if (value == 'KZT') {
      
             OnC_c=OnCursCurrency[4];
             OnC_t=OnCursCurrencyText[4];

             if (OffC_c==-1) {
                 document.getElementById('Currency_ch').innerHTML = "выберите валюту для конвертации";
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = 1 "+OnC_t;}
                 else {
                 console.log(OffC_c);
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
                 document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t;
                 document.getElementById('Result').innerHTML = Math.ceil(Number(element.value)*Currency_matrix[OnC_c][OffC_c]*100)/100;}
         }
  }
       
    });
});

var OffCursCurrency = [0,1,2,3,4];
var OffCursCurrencyText=['RUR','USD','EUR','CHY','KZT'];
const OutCur=document.querySelectorAll('input[name="mycurrency_new"]');
console.log(OutCur);
OutCur.forEach((item) => {
       item.addEventListener('change', function () {
       const {value} = this;
      console.log("нажали кнопку2"+Firstclick);
if (value == 'USD') {

              OffC_c=OffCursCurrency[1];
              OffC_t=OffCursCurrencyText[1];}
      else if (value == 'RUR') {

              OffC_c=OffCursCurrency[0];
              OffC_t=OffCursCurrencyText[0];}  
              
       else if (value == 'EUR') {

              OffC_c=OffCursCurrency[2];
              OffC_t=OffCursCurrencyText[2];} 
       else if (value == 'CNY') {

              OffC_c=OffCursCurrency[3];
              OffC_t=OffCursCurrencyText[3];}  
              
       else if (value == 'KZT') {

              OffC_c=OffCursCurrency[4];
              OffC_t=OffCursCurrencyText[4];}       
if (!Firstclick){//проверяем, что поле ввода ни разу не нажималось      
      if (!Object.keys(element.value).length&&OnC_c>=0&&OffC_c>=0) {//обе валюты выбраны
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму";
        document.getElementById('Currency_ch').innerHTML = "";
      }
      else if (!Object.keys(element.value).length&&OffC_c==-1&&OnC_c>=0) {//выбрана валюта 1
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму";
        document.getElementById('Currency_ch').innerHTML = "Выберите валюту для обмена";
      }
      else if (!Object.keys(element.value).length&&OnC_c==-1&&OffC_c>=0) {//выбрана валюта 2
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму и валюту";
        document.getElementById('Currency_ch').innerHTML = "Выберите валюту для обмена";} 
      }     
 else {console.log("выбраны две валюты"); } //уже были в поле ввода и появился element.event     
       if (regex.test(element.value)){//проверяем, корректно ли введено значение
            if (value == 'USD') {
      
              OffC_c=OffCursCurrency[1];
              OffC_t=OffCursCurrencyText[1];

              if (OnC_c==-1) {
                  document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = 1 "+OffC_t;
             } else {
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
                 document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t;
                 document.getElementById('Result').innerHTML = Math.ceil(Number(element.value)*Currency_matrix[OnC_c][OffC_c]*100)/100; }
     
            } else if (value == 'RUR') {
      
             OffC_c=OffCursCurrency[0];
             OffC_t=OffCursCurrencyText[0];
             
              if (OnC_c==-1) {
                  document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = 1 "+OffC_t;
             } else {
                document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
                document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t;
                document.getElementById('Result').innerHTML = Math.ceil(Number(element.value)*Currency_matrix[OnC_c][OffC_c]*100)/100;}
     
      
            } else if (value == 'EUR') {
      
              OffC_c=OffCursCurrency[2];
              OffC_t=OffCursCurrencyText[2];
              console.log("Зашли в цикл выбора валюты евро "+element.value);
      
             if (OnC_c==-1) {
                 document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = 1 "+OffC_t;
             } else {
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
                 document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t; 
                 document.getElementById('Result').innerHTML = Math.ceil(Number(element.value)*Currency_matrix[OnC_c][OffC_c]*100)/100;}
            } else if (value == 'CNY') {
      
              OffC_c=OffCursCurrency[3];
              OffC_t=OffCursCurrencyText[3];

              if (OnC_c==-1) {
                 document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = 1 "+OffC_t;
             } else {
                document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
                document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t; 
                document.getElementById('Result').innerHTML = Math.ceil(Number(element.value)*Currency_matrix[OnC_c][OffC_c]*100)/100;}
      
            } else if (value == 'KZT') {
      
               OffC_c=OffCursCurrency[4];
               OffC_t=OffCursCurrencyText[4];
               if (OnC_c==-1) {
                 document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = 1 "+OffC_t;
             } else {
                 document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
                 document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t; 
                 document.getElementById('Result').innerHTML = Math.ceil(Number(element.value)*Currency_matrix[OnC_c][OffC_c]*100)/100;}
      
    }
  }
       
    });
});

const element = document.querySelector('input[type="text"]');

element.addEventListener('input', function(event) {
  console.log('Произошло событие', event.type);
  const Firstclick=true;
  console.log(event.target.value);
  const inSum=element.value; 
  console.log(Object.keys(inSum).length);
  console.log(regex.test(inSum));
  console.log("OnC_c="+OnC_c);
  console.log("OffC_c="+OffC_c);
  if (!Object.keys(inSum).length&&OnC_c==-1&&OffC_c==-1){ //если не выбраны валюты и пустое поле ввода

      document.getElementById('Currency').style.color='#AFA4AA'  ;
      document.getElementById('Result').innerHTML = "";
      document.getElementById('Currency').innerHTML = "Выберите валюту и введите сумму";}
      else if (!Object.keys(inSum).length&&OnC_c>=0&&OffC_c>=0) {//обе валюты выбраны
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму";
        document.getElementById('Currency_ch').innerHTML = "";
      }
      else if (!Object.keys(inSum).length&&OffC_c==-1&&OnC_c>=0) {//выбрана валюта 1
        document.getElementById('Currency').style.color='#AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму";
        document.getElementById('Currency_ch').innerHTML = "Выберите валюту для обмена";
      }
      else if (!Object.keys(inSum).length&&OnC_c==-1&&OffC_c>=0) {//выбрана валюта 2
        document.getElementById('Currency').style.color='#4AFA4AA'  ;
        document.getElementById('Result').innerHTML = "";
        document.getElementById('Currency').innerHTML = "Введите сумму и валюту";
        document.getElementById('Currency_ch').innerHTML = "Выберите валюту для обмена";
      }

     if (Object.keys(inSum).length){//если введены символы
      
        if (regex.test(inSum)) {//если символы числовые
            if (OnC_c>=0&&OffC_c>=0) {//если выбраны обе валюты
               document.getElementById('MySum').innerHTML = Number(inSum);
               document.getElementById('Result').innerHTML = Math.ceil(Number(inSum)*Currency_matrix[OnC_c][OffC_c]*100)/100;
               document.getElementById('Currency').innerHTML = "1 "+OnC_t+" = "+Currency_matrix[OnC_c][OffC_c]+ " "+OffC_t;
               document.getElementById('Currency_ch').innerHTML = "1 "+OffC_t+" = "+Currency_matrix[OffC_c][OnC_c]+ " "+OnC_t; } 
            else{
               document.getElementById('Currency').innerHTML = "Выберите валюту";
               document.getElementById('MySum').innerHTML = Number(inSum);
               document.getElementById('Result').innerHTML = Number(inSum);}  
           }
        else{//если символы не числовые
           document.getElementById('Currency').style.color='red' ;
           document.getElementById('Result').innerHTML = "";
           document.getElementById('Currency_ch').innerHTML = "";
           document.getElementById('Currency').innerHTML = "Недопустимое значение";}        
  
      }
})


//const inputField = document.getElementById('mysum');

//element.addEventListener('change', function(event) {
//  console.log('Финальное значение:', this.value);
  //const inSum=this.value; 
  //myElementOn.style.display = 'none';
  //myElementOn_text.style.display = 'flex';
  //myElementOff.style.display = 'none';
  //myElementOff_text.style.display = 'flex';
  //console.log("insum = "+inSum);
  //console.log("OnC_c="+OnC_c);
  //console.log("OffC_c="+OffC_c);
//  event.preventDefault();
  //if (OnC_c>=0&&OffC_c>=0) {
     //console.log('защли в цикл:', this.value);   
    //document.getElementById('MySum').innerHTML = Number(inSum);
    //    document.getElementById('Result').innerHTML = Number(inSum)*Currency_matrix[OnC_c][OffC_c];} 
    //     })
//console.log("дошли сюда и ");
//const cs=document.getElementById('MySum').innerHTML;
//console.log("моя сумма: "+cs);







