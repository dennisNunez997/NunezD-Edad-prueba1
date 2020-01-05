


function  ExternalJSFileFunction()
{
    var yearborn = document.getElementById("txt_year").value;
    var anio = parseInt(yearborn);

    var month = document.getElementById("txt_month").value;
    var month_numb = parseInt(month);

    var day = document.getElementById("txt_day").value;
    var dia = parseInt(day);

    var resultado = document.getElementById("edad_final");

    var age;
    
    var date = new Date();
    var fecha = date.getDate();

    var year = date.getFullYear();
    var a = date.getMonth();
    var mes = a + 1;

    var year = date.getFullYear();
    
    if((fecha >= dia)&&(month_numb >= mes))
    {
        age = (year - yearborn)+1;

        console.log("su edad es: "+age);
    }else
    {
        age = year - yearborn;

        console.log("su edad es: "+age);

        document.getElementById("edad_final").innerHTML = (age);
    }

}