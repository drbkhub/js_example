let data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}


data.get_name = function() {
	alert("Наименование: " + this["displayedName"]["displayedName"]["value"]);
}

data.shop_list = function() {
	let shops = [];
	for (const [key, value] of Object.entries(this["stock"]["stocks"]["34"])) {
		if (Number(value) > 0) {
			shops.push(key);
		}
	}
	alert("Магазины в которых есть товары: " + shops)
}

data.get_max_value = function() {
	let shop_num = "";
	let max_price = "";
	for (let [shop, price] of Object.entries(this["stock"]["stocks"]["34"])) {
		if (Number(price) > Number(max_price)) {
			max_price = price;
			shop_num = shop;
		}
	}
	alert("Максимальное кол-во тавара в " + shop_num+" - "+max_price+"штук.");
}

data.get_name()
data.shop_list()
data.get_max_value()