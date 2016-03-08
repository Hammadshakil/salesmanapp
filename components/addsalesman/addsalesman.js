
app.controller('AddsalesmanController',function($firebaseArray){


this.salesman={
    name:"",
    email:"",
    phone:"",
    address:"",
    cnic:"",
    age:"",
    working:""
};
    var salesmen = this.salesman;

    this.addsalesman=function(){

        var ref=new Firebase("https://salesmanapplication.firebaseio.com/companies/company_id/salesmen");
        var object=$firebaseArray(ref);
        object.$add({name: salesmen.name, phone:salesmen.phone,address:salesmen.address,email: salesmen.email, cnic:salesmen.cnic,age:salesmen.age,working:salesmen.working});
        alert('Your task has been submited');
        salesmen.name='';
        salesmen.email='';
        salesmen.age='';
        salesmen.address='';
        salesmen.phone='';
        salesmen.cnic='';
        salesmen.working='';




    }

});