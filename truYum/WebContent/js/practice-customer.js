const items=[
{Name:'Sandwich',Free_Delivery:'Yes',Price:'Rs.99.00',Category:'Main Course'},
{Name:'Masal dhosa',Free_Delivery:'No',Price:'Rs.50.00',Category:'Main Course'},
{Name:'French Fries',Free_Delivery:'Yes',Price:'Rs.57.00',Category:'Starters'}
];
const renderProducts=function(items)
{
let tabEl=document.querySelector("#cust-tab");

items.forEach(function(item){

let trEl1=document.createElement("tr");

let tdEl1=document.createElement("td");

tdEl1.textContent=item.Name;

trEl1.appendChild(tdEl1);

let tdEl2=document.createElement("td");

tdEl2.textContent=item.Free_Delivery;

trEl1.appendChild(tdEl2);

let tdEl3=document.createElement("td");

tdEl3.textContent=item.Price;

trEl1.appendChild(tdEl3);

let tdEl4=document.createElement("td");

tdEl4.textContent=item.Category;

trEl1.appendChild(tdEl4);


tabEl.appendChild(trEl1);

let tdEl7=document.createElement("td");

                                let editLink=document.createElement('a');

                                editLink.setAttribute('id','link1');

                                editLink.href="menu-item-list-customer-notification.html";

                                editLink.textContent="Add to cart"

                                tdEl7.appendChild(editLink);

                                trEl1.appendChild(tdEl7);




})
document.querySelector('#link1').addEventListener('click',function(){

console.log(item);

})


}

renderProducts(items);
