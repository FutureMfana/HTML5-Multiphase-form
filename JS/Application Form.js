function overview(){
    document.getElementById('name_res').innerHTML = document.getElementById('name').value;
    document.getElementById('sur_res').innerHTML = document.getElementById('sur').value;
    document.getElementById('id_no_res').innerHTML = document.getElementById('id_no').value;
    document.getElementById('DoB').innerHTML = document.getElementById('DoB_res').value;    
    document.getElementById('gender_res').innerHTML = document.getElementById('gender').value;
    document.getElementById('citizenship_res').innerHTML = document.getElementById('citizenship').value;
    document.getElementById('race_res').innerHTML = document.getElementById('race').value;
    document.getElementById('cell_res').innerHTML = document.getElementById('cell').value;
    document.getElementById('email_res').innerHTML = document.getElementById('email').value;
    document.getElementById('grade_applying_res').innerHTML = document.getElementById('grade_applying').value;
    document.getElementById('grade_passed_res').innerHTML = document.getElementById('grade_passed').value;
    document.getElementById('prevSchool_res').innerHTML = document.getElementById('previousSchool').value;
    
    document.getElementById('caption').innerHTML = "Data Overview";
    document.getElementById('prevSchool').style.display = "none";
    document.getElementById('overview').style.display = "block";
    document.getElementById('completion').value = 100;
    return;
}
function showContactDetials(){
    document.getElementById('caption').innerHTML = "Contact Details";
    document.getElementById('contactDetials').style.display = "block";
    document.getElementById('personalDetials').style.display = "none";
    document.getElementById('completion').value = 33;
    return;
}
function showPrevSchool(){
    document.getElementById('caption').innerHTML = "Previous School Details";
    document.getElementById('prevSchool').style.display = "block";
    document.getElementById('contactDetials').style.display = "none";
    document.getElementById('completion').value = 66;
    return;
}
function showPersonalInfo(){
    document.getElementById('completion').value = 0;
    document.getElementById('caption').innerHTML = "Personal Details";
    document.getElementById('personalDetials').style.display = "block";
    document.getElementById('overview').style.display = "none";
    return;
}
function x(s){
    document.getElementById(s).focus();
}
function highlight(lbl, sourc){
    document.getElementById(lbl).style.color = "red";
    document.getElementById(sourc).style.borderBottom = "2px red solid";
}
function accepted(lbl, sourc){
    document.getElementById(lbl).innerHTML = "";
    document.getElementById(sourc).style.borderBottom = "2px green solid";
}
function validateNameOrSur(lbl,sourc){
    var prefix = "Surname";
    if (sourc=="name"){
        prefix = "Name";
    }
    highlight(lbl, sourc);
    var name = document.getElementById(sourc).value;
    name = name.trim();
    if (name.length < 1){
        document.getElementById(lbl).innerHTML = prefix + " is required *";
        x(sourc)
        return;
    }else if (name.length < 3){
        document.getElementById(lbl).innerHTML = prefix + " is too short";
        x(sourc)
        return;
    }else if (!isAlph(name)){
        document.getElementById(lbl).innerHTML = "Only alphetic characters allowed";
        x(sourc)
        return;
    }
    accepted(lbl, sourc);
}
function isAlph(name){
    return name.match(/^[A-Za-z]+$/);
}
function isNum(s){
    return s.match(/^[0-9]*$/);
}
function validatesID(s){
    highlight('error_id_no', 'id_no');
    document.getElementById('error_id_no').style.color = "red";
    document.getElementById('id_no').style.borderBottom = "2px red solid";
    var id_no = document.getElementById('id_no').value;
    if (id_no.length < 1){
        document.getElementById('error_id_no').innerHTML = "ID Number is required";
        x('id_no');
        return;
    }else if (id_no.length < 13){
        document.getElementById('error_id_no').innerHTML = "ID Number should be 13 characters long"
        x('id_no');
        return;
    }else if (!isNum(id_no)){
        document.getElementById('error_id_no').innerHTML = "Only numeric characters allowed";
        x('id_no');
        return;
    }
    isID(id_no);
    accepted('error_id_no', 'id_no');
}
function isID(s){
    var mon = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"];
    var yy = s.substring(0,2);
    var mm = s.substring(2,4);
    var dd = s.substring(4,6);
    var g = s.substring(6,7);
    if (parseInt(yy) > 18){
        yy = "19"+yy;
    }else{
        yy = "20"+yy;
    }
    if (parseInt(g) > 4){
        document.getElementById('gender').value = "Male";
    }else{
        document.getElementById('gender').value = "Female";
    }
    if (parseInt(dd)>31 || parseInt(dd) < 1){
        document.getElementById('error_id_no').innerHTML = "Invalid ID Number, check date of birth";
        x('id_no');
        return;
    }else if(parseInt(mm) > 12 || parseInt(mm) < 1){
        document.getElementById('error_id_no').innerHTML = "Invalid ID Number, check month of birth";
        x('id_no');
        return;
    }else if(mm.includes("04 06 09 11") && parseInt(dd) > 30 || mm == "02" && parseInt(dd) > 29){
        document.getElementById('error_id_no').innerHTML = "Invalid ID Number, check date of birth";
        x('id_no');
        return;
    }else if (mm == "02" && parseInt(dd) >28 &&!isLeap(yy)){
        document.getElementById('error_id_no').innerHTML = "Invalid ID Number, check date of birth";
        x('id_no');
        return;
    }
    document.getElementById('DoB').value = dd + "/" + mon[mm-1] + "/" + yy;
    g = s.substring(10,11);
    if (g == "1"){
        document.getElementById('citizenship').value = "Permanent South African"
    }else if(g == "0"){
        document.getElementById('citizenship').value = "South African Citizen"
    }else{
        document.getElementById('error_id_no').innerHTML = "Invalid ID Number, check 11th";
        x('id_no');
        return;
    }
    accepted('error_id_no', 'id_no');
}
function isLeap(yy){
    return((parseInt(yy) % 4 == 0 && parseInt(yy) % 100 == 0 ) || parseInt(yy) % 400 == 0);
}
function validatesCell(){
    highlight('error_cell', 'cell');
    var s = document.getElementById('cell').value
    s = s.trim()
    if (s.length < 10){
        document.getElementById('error_cell').innerHTML = "Cellphone number is too short";
        x('cell');
        return;
    }else if (s.match(/^[0-9]*$/)){
    }else{
        document.getElementById('error_cell').innerHTML = "Cellphone number shoul contain numeric characters only";
        x('cell');
        return;
    }
    accepted('error_cell', 'cell');
}