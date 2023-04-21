function listbox()
{
    let option = document.getElementById("bev").value;
    alert("Happy Drinking " + option);
        
    let printhtml = document.getElementById("bev").value;
    document.getElementById("printhtml").innerHTML = "Dont Drink " + option;
    
            
}