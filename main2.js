async function phone (){
    const res = await fetch("https://dummyjson.com/product");
    const type =await res.json();
   const pr= type.products;
    
    const object=pr.map( function(ps){

    return `
    <tr>
    <td>${ps.id}</td>
    <td>${ps.title}</td>
    <td>${ps.price}</td>
    <td><img src=" ${ps.thumbnail}" class="image"/></td>

    </tr>`


    }).join("");
    document.querySelector(".Products").innerHTML=object;   
}
phone();