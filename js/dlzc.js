window.onload = function () {
    //给表单绑定onsubmit事件
    document.getElementById("form").onsubmit = function () {
        return checkUsername() && checkPassword() &&checkEmail() && checkRename() && checkTelphone();
    }

    //给用户名和密码框、Email、姓名、手机号分别绑定离焦事件
    document.getElementById("username").onblur = checkUsername;
    document.getElementById("password").onblur = checkPassword;
    document.getElementById("Email").onblur = checkEmail;
    document.getElementById("rename").onblur = checkRename;
    document.getElementById("Telphone").onblur = checkTelphone;
}

//校验用户名
function checkUsername() {
    //获取用户名的值
    var username = document.getElementById("username").value;

    //定义正则表达式
    var reg_username = /^([a-zA-Z0-9_-])/;
    //判断值是否符合正则表达式的规则
    var flag = reg_username.test(username);

    //提示信息
    var s_username = document.getElementById("s_username");

    if (flag) {
        //提示绿色对勾
        s_username.innerHTML = "<img src='../images/gou.webp' width='35' height='25'>";
    } else {
        //提示红色错误信息
        s_username.innerHTML = "用户名格式有误！";
    }
    return flag;
}

//校验密码
function checkPassword(){
    //1.获取密码的值
    var password = document.getElementById("password").value;
    //2.定义正则表达式
    var reg_password = /^\w{6,12}$/;
    //3.判断值是否符合正则的规则
    var flag = reg_password.test(password);
    //4.提示信息
    var s_password = document.getElementById("s_password");

    if(flag){
        //提示绿色对勾
        s_password.innerHTML = "<img width='35' height='25' src='../images/gou.webp'/>";
    }else{
        //提示红色错误信息
        s_password.innerHTML = "密码格式有误";
    }
    return flag;
}
//校验Email
function checkEmail(){
    //1.获取Email的值
    var email = document.getElementById("Email").value;
    //2.定义正则表达式
    var reg_email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    //3.判断值是否符合正则的规则
    var flag = reg_email.test(email);
    //4.提示信息
    var s_email = document.getElementById("s_email");

    if(flag){
        //提示绿色对勾
        s_email.innerHTML = "<img width='35' height='25' src='../images/gou.webp'/>";
    }else{
        //提示红色错误信息
        s_email.innerHTML = "Email格式有误";
    }
    return flag;
}
//校验真实姓名
function checkRename(){
    //1.获取真实姓名的值
    var rename = document.getElementById("rename").value;
    //2.定义正则表达式
    var reg_rename = /^[\u4e00-\u9fa5]{2,4}$/;
    //3.判断值是否符合正则的规则
    var flag = reg_rename.test(rename);
    //4.提示信息
    var s_rename = document.getElementById("s_rename");

    if(flag){
        //提示绿色对勾
        s_rename.innerHTML = "<img width='35' height='25' src='../images/gou.webp'/>";
    }else{
        //提示红色错误信息
        s_rename.innerHTML = "真实姓名输入有误";
    }
    return flag;
}
//校验手机号
function checkTelphone(){
    //1.获取手机号的值
    var telphone = document.getElementById("Telphone").value;
    //2.定义正则表达式
    var reg_telphone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    //3.判断值是否符合正则的规则
    var flag = reg_telphone.test(telphone);
    //4.提示信息
    var s_telphone = document.getElementById("s_telphone");

    if(flag){
        //提示绿色对勾
        s_telphone.innerHTML = "<img width='35' height='25' src='../images/gou.webp'/>";
    }else{
        //提示红色错误信息
        s_telphone.innerHTML = "手机号输入有误";
    }
    return flag;
}
