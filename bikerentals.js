 $(document).ready(function(){
            var urldata = [
          {
      "id": 1,
      "name": "Adult Male Bike",
      "price": 20.50,
      "image": "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
      "product_type": "bike"
    },
    {
      "id": 2,
      "name": "Adult Female Bike",
      "price": 20.50,
      "image": "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
      "product_type": "bike"
    },
    {
      "id": 3,
      "name": "Kids Unisex Bike",
      "price": 12.75,
      "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
      "product_type": "bike"
    },
    {
      "id": 4,
      "name": "Adult Unisex Helmet",
      "price": 4.00,
      "image": "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
      "product_type": "accessory"
    },
    {
      "id": 5,
      "name": "Kids Unisex Helmet",
      "price": 3.50,
      "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
      "product_type": "accessory"
    },
    {
      "id": 6,
      "name": "Insurance",
      "price": 9.99,
      "image": "http://via.placeholder.com/250x250?text=Insurance",
      "product_type": "addon"
    }
    ];
     var i=1;
         $.each(urldata, function (index, value) { 
         $("#image"+i+"").append("<img src='"+value.image+"' />");
         var id=value.id;
         var name=value.name;
         var price=value.price;
         var prod=value.product_type;
         
         document.getElementById("id"+i+"").innerHTML=id;
         document.getElementById("name"+i+"").innerHTML=name;
         document.getElementById("price"+i+"").innerHTML=price;
         document.getElementById("prod"+i+"").innerHTML=prod;
         i++;        
         });
         });

