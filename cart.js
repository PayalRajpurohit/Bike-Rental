document.getElementById('page2').style.display = 'none';
document.getElementById('page2-title').style.display = 'none';



var total = 0;
var id_inc = 0;

function myFunc(value) {
	//  alert("Added to cart");
	var urldata = [{
		"id": 1,
		"name": "Adult Male Bike",
		"price": 20.50,
		"image": "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
		"product_type": "bike"
	}, {
		"id": 2,
		"name": "Adult Female Bike",
		"price": 20.50,
		"image": "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
		"product_type": "bike"
	}, {
		"id": 3,
		"name": "Kids Unisex Bike",
		"price": 12.75,
		"image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
		"product_type": "bike"
	}, {
		"id": 4,
		"name": "Adult Unisex Helmet",
		"price": 4.00,
		"image": "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
		"product_type": "accessory"
	}, {
		"id": 5,
		"name": "Kids Unisex Helmet",
		"price": 3.50,
		"image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
		"product_type": "accessory"
	}, {
		"id": 6,
		"name": "Insurance",
		"price": 9.99,
		"image": "http://via.placeholder.com/250x250?text=Insurance",
		"product_type": "addon"
	}];


	switch (value) {
		case 0:
			i = 0;
			break;
		case 1:
			i = 1;
			break;
		case 2:
			i = 2;
			break;
		case 3:
			i = 3;
			break;
		case 4:
			i = 4;
			break;
		case 5:
			i = 5;
			break;
		case 6:
			i = 6;
			break;
	}
	var table = document.getElementById("carttable");
	var row = table.insertRow(1);
	var ID = row.insertCell(0);
	var title = row.insertCell(1);

	var price = row.insertCell(2);
	var product_type = row.insertCell(3);
	var remove_col = row.insertCell(4);
	row.setAttribute("id", "id_p" + id_inc++);
	var total_element = document.getElementById("Total_amount");

	// cell1.innerHTML = document.getElementById(id6).value;
	ID.innerHTML = urldata[i].id;
	title.innerHTML = urldata[i].name;

	price.innerHTML = urldata[i].price;
	product_type.innerHTML = urldata[i].product_type;
	total += urldata[i].price;
	total_element.innerHTML = total.toFixed(2);


	//remove button
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "REMOVE";
	btn.style.cssText = 'background-color:Red;color: white;border-radius: 8px;padding: 10px 35px;display: inline-block;margin: 4px 2px;';
	remove_col.appendChild(btn);
	//fucn to remove
	remove_col.addEventListener("click", remove_item_cart);

	function remove_item_cart(e) {
		e.stopPropagation();
		var del_cart_element = e.target.parentNode.parentElement.getAttribute("id");
		var update_amount = parseFloat(document.getElementById(del_cart_element).childNodes[2].innerHTML);
		total -= update_amount;
		document.getElementById(del_cart_element).remove();
		total_element.innerHTML = total.toFixed(2);

	}

}


function validate(e) {


	var arr_val = document.getElementById("carttable").innerText.split("\n");
	if (arr_val.length <= 1) {
		alert("No Items to check out");
	} else {
		if (document.getElementById("carttable").innerText.includes("bike")) {








			var pagenew = document.getElementById("page2");
			if (pagenew.style.display === "block") {
				alert("Redirecting to payment gateway!");

			} else {
				document.getElementById('page1').style.display = 'none';
				document.getElementById('page2-title').style.display = 'block';
				document.getElementById('page2').style.display = 'block';
			}






		} else {
			alert("You must select atleast one bike!");
		}
	}




}
