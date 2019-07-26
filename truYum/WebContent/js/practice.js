const items=[
{Name:'Sandwich',Price:'Rs.99.00',Active:'Yes',Date_Of_Launch:'09/03/2019',Category:'Main Course',Free_Delivery:'Yes'},
{Name:'Masal dhosa',Price:'Rs.50.00',Active:'Yes',Date_Of_Launch:'09/08/2019',Category:'Main Course',Free_Delivery:'No'},
{Name:'French Fries',Price:'Rs.57.00',Active:'Yes',Date_Of_Launch:'04/11/2019',Category:'Starters',Free_Delivery:'Yes'}
];
const renderProducts=function(items)
{
let tabEl=document.querySelector("#prod-tab");

items.forEach(function(item){

let trEl1=document.createElement("tr");

let tdEl1=document.createElement("td");

tdEl1.textContent=item.Name;

trEl1.appendChild(tdEl1);

let tdEl2=document.createElement("td");

tdEl2.textContent=item.Price;

trEl1.appendChild(tdEl2);

let tdEl3=document.createElement("td");

tdEl3.textContent=item.Active;

trEl1.appendChild(tdEl3);
let tdEl4=document.createElement("td");

tdEl4.textContent=item.Date_Of_Launch;

trEl1.appendChild(tdEl4);
let tdEl5=document.createElement("td");

tdEl5.textContent=item.Category;

trEl1.appendChild(tdEl5);
let tdEl6=document.createElement("td");

tdEl6.textContent=item.Free_Delivery;

trEl1.appendChild(tdEl6);

tabEl.appendChild(trEl1);

let tdEl7=document.createElement("td");

                                let editLink=document.createElement('a');

                                editLink.setAttribute('id','link1');

                                editLink.href="Edit_Menu.html";

                                editLink.textContent="Edit"

                                tdEl7.appendChild(editLink);

                                trEl1.appendChild(tdEl7);




})
document.querySelector('#link1').addEventListener('click',function(){

console.log(item);

})


}

renderProducts(items);

function validate()
{
                var s=document.forms["menu"]["name"].value;
                var letters=/^[A-Za-z]+$/
                if(s == "")
                {
                alert("Title is required");
                return false;
                }
                else if(s.length<2 || s.length>65)
                {
                  alert("Title should have 2 to 65 characters");
                    return false;
                }
                var price=document.forms["menu"]["price"].value;
                if(price=="")
                {
                                alert("price is required");
                                return false;
                }
                else if(price.match(letters))
                {
                                alert("price has to be a number.");
                                return false;
                }
                var date=document.forms["menu"]["date"].value;
                if(date=="")
                {
                                alert("date of launch is required");
                                return false;
                }
                var category=document.forms["menu"]["category"].value;
                if(category=="")
                {
                                alert("Select one category");
                                return false;
                }

}