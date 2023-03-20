$(document).ready(function(){
    function checkName(e){
        console.log(e.which);
        var c = this.selectionStart,
            r = /[^a-z ]/gi,
            v = $(this).val();
        if(r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
        console.log(e.which);
    } 
    
    function checkPhone(e){
        var c = this.selectionStart,
        r = /[^+0-9 -]/gi,
        v = $(this).val();
    if(r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
    console.log(e.which);
    }
    
    function checkEmail(e){
        var c = this.selectionStart,
            r = /[^a-z0-9.@_]/gi,
            v = $(this).val();
        if(r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
        console.log(e.which);
    }
    
    $('#firstName').on('input',checkName);
    
    $('#lastName').on('input',checkName);
    
    $('#phoneNumber').on('input',checkPhone);
    
    $('#email').on('input',checkEmail);
})