

app.controller('SignupController',function($firebaseArray){

    this.addCompany={
        name:'',
        email:'',
        address:'',
        phone:'',
        pass:''

    };

    var company=this.addCompany;
    this.addNewCompany=function(){


        var FirebaseTokenGenerator = require("firebase-token-generator");
        var tokenGenerator = new FirebaseTokenGenerator("8gbbl02Fdp4jHvGqStmCtaj4PxHVGB3gqj1N2Scg");
        var token = tokenGenerator.createToken({ uid: "uniqueId1", some: "arbitrary", data: "here" });
        console(token);

    /*    var ref=new Firebase("https://salesmanapplication.firebaseio.com/companies");
        var object=$firebaseArray(ref);
        object.$add({name: company.name, phone:company.phone,address:company.address,email: company.email, pass: company.pass});
        alert('Your task has been submited');
        company.name='';
        company.email='';
        company.pass='';
        company.address='';
        company.phone='';
*/


    }




});