function clear(){
    document.getElementById('oldpass').value = ''
    document.getElementById('newpass').value = ''
    document.getElementById('confirmpass').value = ''
}

document.getElementById('resetBtn').onclick = clear

document.getElementById('passBtn').onclick = function(){
    var old = document.getElementById('oldpass').value
    
    //if the old password match then update
    
    //else prompt old pass is incorrect
    clear()
}



