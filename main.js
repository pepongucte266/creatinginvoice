descriptionSelect = document.getElementById('description')
typeSelect = document.getElementById('type')
lenghtSelect = document.getElementById('lenght')
countSelect = document.getElementById('count')
noteSelect = document.getElementById('note')
closureCheckbox = $(".closure-checkbox")
typeCheckbox = document.getElementsByName('cbtype')[0]
colorCheckbox = document.getElementsByName('cbcolor')[0]
sum = 0
var checkDiscount = false;
OTHER = `
              <option value="Nature Straight (LB)">Nature Straight (LB)</option>
              <option value="Nature Straight (Color)">Nature Straight (Color)</option>
              <option value="Curly/wayv (LB)">Curly/wayv (LB)</option>
              <option value="Curly/wayv (Color)">Curly/wayv (Color)</option>
              <option value="Bone Straight (LB)">Bone Straight (LB)</option>
              <option value="Bone Straight (Color)">Bone Straight (Color)</option>
              `;

CLOSURE = `
          <option value="2X4">2X4</option>
          <option value="2X6">2X6</option>
          <option value="4X4">4X4</option>
          <option value="5X5">5X5</option>
          <option value="6X6">6X6</option>
          <option value="13X4">13X4</option>
          <option value="13X6">13X6</option>
          `;

function getPrice(description, type, lenght, count, note, cbtype = false, cbcolor = false) {
    let price = 0;
    let bonusType = 0;
    let bonusColor = 0;
    switch (description) {
        case 'DOUBLE DRAWN':
            switch (type) {
                case 'Nature Straight (LB)':
                    switch (lenght) {
                        case '6':
                            price = 14;
                            break;
                        case '8':
                            price = 15;
                            break;
                        case '10':
                            price = 20;
                            break;
                        case '12':
                            price = 23;
                            break;
                        case '14':
                            price = 29;
                            break;
                        case '16':
                            price = 36;
                            break;
                        case '18':
                            price = 44;
                            break;
                        case '20':
                            price = 50;
                            break;
                        case '22':
                            price = 54;
                            break;
                        case '24':
                            price = 56;
                            break;
                        case '26':
                            price = 65;
                            break;
                        case '28':
                            price = 71;
                            break;
                        case '30':
                            price = 75;
                            break;
                    }
                    break;
                case 'Nature Straight (Color)':
                    switch (lenght) {
                        case '6':
                            price = 16;
                            break;
                        case '8':
                            price = 17;
                            break;
                        case '10':
                            price = 22;
                            break;
                        case '12':
                            price = 27;
                            break;
                        case '14':
                            price = 35;
                            break;
                        case '16':
                            price = 41;
                            break;
                        case '18':
                            price = 47;
                            break;
                        case '20':
                            price = 54;
                            break;
                        case '22':
                            price = 59;
                            break;
                        case '24':
                            price = 64;
                            break;
                        case '26':
                            price = 68;
                            break;
                        case '28':
                            price = 73;
                            break;
                        case '30':
                            price = 77;
                            break;
                    }
                    break;
                case 'Curly/wayv (LB)':
                    switch (lenght) {
                        case '6':
                            price = 17;
                            break;
                        case '8':
                            price = 18;
                            break;
                        case '10':
                            price = 22;
                            break;
                        case '12':
                            price = 26;
                            break;
                        case '14':
                            price = 31;
                            break;
                        case '16':
                            price = 39;
                            break;
                        case '18':
                            price = 47;
                            break;
                        case '20':
                            price = 53;
                            break;
                        case '22':
                            price = 56;
                            break;
                        case '24':
                            price = 59;
                            break;
                        case '26':
                            price = 68;
                            break;
                        case '28':
                            price = 73;
                            break;
                        case '30':
                            price = 78;
                            break;
                    }
                    break;
                case 'Curly/wayv (Color)':
                    switch (lenght) {
                        case '6':
                            price = 19;
                            break;
                        case '8':
                            price = 20;
                            break;
                        case '10':
                            price = 25;
                            break;
                        case '12':
                            price = 30;
                            break;
                        case '14':
                            price = 37;
                            break;
                        case '16':
                            price = 43;
                            break;
                        case '18':
                            price = 50;
                            break;
                        case '20':
                            price = 56;
                            break;
                        case '22':
                            price = 62;
                            break;
                        case '24':
                            price = 66;
                            break;
                        case '26':
                            price = 71;
                            break;
                        case '28':
                            price = 76;
                            break;
                        case '30':
                            price = 80;
                            break;
                    }
                    break;
                case 'Bone Straight (LB)':
                    switch (lenght) {
                        case '6':
                            price = 17;
                            break;
                        case '8':
                            price = 18;
                            break;
                        case '10':
                            price = 22;
                            break;
                        case '12':
                            price = 26;
                            break;
                        case '14':
                            price = 31;
                            break;
                        case '16':
                            price = 38;
                            break;
                        case '18':
                            price = 45;
                            break;
                        case '20':
                            price = 52;
                            break;
                        case '22':
                            price = 56;
                            break;
                        case '24':
                            price = 59;
                            break;
                        case '26':
                            price = 67;
                            break;
                        case '28':
                            price = 73;
                            break;
                        case '30':
                            price = 77;
                            break;
                    }
                    break;
                case 'Bone Straight (Color)':
                    switch (lenght) {
                        case '6':
                            price = 19;
                            break;
                        case '8':
                            price = 20;
                            break;
                        case '10':
                            price = 25;
                            break;
                        case '12':
                            price = 30;
                            break;
                        case '14':
                            price = 37;
                            break;
                        case '16':
                            price = 43;
                            break;
                        case '18':
                            price = 50;
                            break;
                        case '20':
                            price = 56;
                            break;
                        case '22':
                            price = 62;
                            break;
                        case '24':
                            price = 66;
                            break;
                        case '26':
                            price = 71;
                            break;
                        case '28':
                            price = 76;
                            break;
                        case '30':
                            price = 80;
                            break;
                    }
                    break;
            }
            break;
        case 'SUPPER DOUBLE DRAWN':
            switch (type) {
                case 'Nature Straight (LB)':
                    switch (lenght) {
                        case '6':
                            price = 16;
                            break;
                        case '8':
                            price = 18;
                            break;
                        case '10':
                            price = 23;
                            break;
                        case '12':
                            price = 28;
                            break;
                        case '14':
                            price = 34;
                            break;
                        case '16':
                            price = 43;
                            break;
                        case '18':
                            price = 50;
                            break;
                        case '20':
                            price = 56;
                            break;
                        case '22':
                            price = 61;
                            break;
                        case '24':
                            price = 66;
                            break;
                        case '26':
                            price = 72;
                            break;
                        case '28':
                            price = 79;
                            break;
                        case '30':
                            price = 88;
                            break;
                    }
                    break;
                case 'Nature Straight (Color)':
                    switch (lenght) {
                        case '6':
                            price = 19;
                            break;
                        case '8':
                            price = 21;
                            break;
                        case '10':
                            price = 26;
                            break;
                        case '12':
                            price = 31;
                            break;
                        case '14':
                            price = 36;
                            break;
                        case '16':
                            price = 46;
                            break;
                        case '18':
                            price = 53;
                            break;
                        case '20':
                            price = 59;
                            break;
                        case '22':
                            price = 64;
                            break;
                        case '24':
                            price = 68;
                            break;
                        case '26':
                            price = 75;
                            break;
                        case '28':
                            price = 81;
                            break;
                        case '30':
                            price = 91;
                            break;
                    }
                    break;
                case 'Curly/wayv (LB)':
                    switch (lenght) {
                        case '6':
                            price = 19;
                            break;
                        case '8':
                            price = 21;
                            break;
                        case '10':
                            price = 26;
                            break;
                        case '12':
                            price = 31;
                            break;
                        case '14':
                            price = 36;
                            break;
                        case '16':
                            price = 46;
                            break;
                        case '18':
                            price = 53;
                            break;
                        case '20':
                            price = 59;
                            break;
                        case '22':
                            price = 64;
                            break;
                        case '24':
                            price = 68;
                            break;
                        case '26':
                            price = 75;
                            break;
                        case '28':
                            price = 81;
                            break;
                        case '30':
                            price = 91;
                            break;
                    }
                    break;
                case 'Curly/wayv (Color)':
                    switch (lenght) {
                        case '6':
                            price = 21;
                            break;
                        case '8':
                            price = 24;
                            break;
                        case '10':
                            price = 28;
                            break;
                        case '12':
                            price = 34;
                            break;
                        case '14':
                            price = 39;
                            break;
                        case '16':
                            price = 49;
                            break;
                        case '18':
                            price = 56;
                            break;
                        case '20':
                            price = 62;
                            break;
                        case '22':
                            price = 66;
                            break;
                        case '24':
                            price = 71;
                            break;
                        case '26':
                            price = 77;
                            break;
                        case '28':
                            price = 84;
                            break;
                        case '30':
                            price = 93;
                            break;
                    }
                    break;
                case 'Bone Straight (LB)':
                    switch (lenght) {
                        case '6':
                            price = 18;
                            break;
                        case '8':
                            price = 21;
                            break;
                        case '10':
                            price = 25;
                            break;
                        case '12':
                            price = 31;
                            break;
                        case '14':
                            price = 36;
                            break;
                        case '16':
                            price = 46;
                            break;
                        case '18':
                            price = 52;
                            break;
                        case '20':
                            price = 59;
                            break;
                        case '22':
                            price = 63;
                            break;
                        case '24':
                            price = 68;
                            break;
                        case '26':
                            price = 81;
                            break;
                        case '28':
                            price = 84;
                            break;
                        case '30':
                            price = 90;
                            break;
                    }
                    break;
                case 'Bone Straight (Color)':
                    switch (lenght) {
                        case '6':
                            price = 21;
                            break;
                        case '8':
                            price = 23;
                            break;
                        case '10':
                            price = 28;
                            break;
                        case '12':
                            price = 33;
                            break;
                        case '14':
                            price = 39;
                            break;
                        case '16':
                            price = 48;
                            break;
                        case '18':
                            price = 55;
                            break;
                        case '20':
                            price = 61;
                            break;
                        case '22':
                            price = 65;
                            break;
                        case '24':
                            price = 71;
                            break;
                        case '26':
                            price = 84;
                            break;
                        case '28':
                            price = 87;
                            break;
                        case '30':
                            price = 93;
                            break;
                    }
                    break;
            }
            break;
        case 'SINGLE DRAWN':
            switch (type) {
                case 'Nature Straight (LB)':
                    switch (lenght) {
                        case '6':
                            price = 13;
                            break;
                        case '8':
                            price = 14;
                            break;
                        case '10':
                            price = 18;
                            break;
                        case '12':
                            price = 20;
                            break;
                        case '14':
                            price = 25;
                            break;
                        case '16':
                            price = 32;
                            break;
                        case '18':
                            price = 41;
                            break;
                        case '20':
                            price = 46;
                            break;
                        case '22':
                            price = 49;
                            break;
                        case '24':
                            price = 52;
                            break;
                        case '26':
                            price = 61;
                            break;
                        case '28':
                            price = 66;
                            break;
                        case '30':
                            price = 71;
                            break;
                    }
                    break;
                case 'Nature Straight (Color)':
                    switch (lenght) {
                        case '6':
                            price = 15;
                            break;
                        case '8':
                            price = 16;
                            break;
                        case '10':
                            price = 19;
                            break;
                        case '12':
                            price = 23;
                            break;
                        case '14':
                            price = 30;
                            break;
                        case '16':
                            price = 36;
                            break;
                        case '18':
                            price = 43;
                            break;
                        case '20':
                            price = 49;
                            break;
                        case '22':
                            price = 55;
                            break;
                        case '24':
                            price = 59;
                            break;
                        case '26':
                            price = 64;
                            break;
                        case '28':
                            price = 68;
                            break;
                        case '30':
                            price = 73;
                            break;
                    }
                    break;
                case 'Curly/wayv (LB)':
                    switch (lenght) {
                        case '6':
                            price = 16;
                            break;
                        case '8':
                            price = 17;
                            break;
                        case '10':
                            price = 19;
                            break;
                        case '12':
                            price = 22;
                            break;
                        case '14':
                            price = 28;
                            break;
                        case '16':
                            price = 35;
                            break;
                        case '18':
                            price = 43;
                            break;
                        case '20':
                            price = 49;
                            break;
                        case '22':
                            price = 52;
                            break;
                        case '24':
                            price = 55;
                            break;
                        case '26':
                            price = 63;
                            break;
                        case '28':
                            price = 69;
                            break;
                        case '30':
                            price = 73;
                            break;
                    }
                    break;
                case 'Curly/wayv (Color)':
                    switch (lenght) {
                        case '6':
                            price = 18;
                            break;
                        case '8':
                            price = 19;
                            break;
                        case '10':
                            price = 22;
                            break;
                        case '12':
                            price = 26;
                            break;
                        case '14':
                            price = 33;
                            break;
                        case '16':
                            price = 39;
                            break;
                        case '18':
                            price = 46;
                            break;
                        case '20':
                            price = 52;
                            break;
                        case '22':
                            price = 57;
                            break;
                        case '24':
                            price = 62;
                            break;
                        case '26':
                            price = 66;
                            break;
                        case '28':
                            price = 71;
                            break;
                        case '30':
                            price = 76;
                            break;
                    }
                    break;
            }
            break;
        case 'CLOSURE':
            switch (type) {
                case '2X4':
                    switch (lenght) {
                        case '8':
                            price = 16;
                            break;
                        case '10':
                            price = 17;
                            break;
                        case '12':
                            price = 18;
                            break;
                        case '14':
                            price = 21;
                            break;
                        case '16':
                            price = 22;
                            break;
                        case '18':
                            price = 23;
                            break;
                        case '20':
                            price = 25;
                            break;
                        case '22':
                            price = 27;
                            break;
                        case '24':
                            price = 30;
                            break;
                        case '26':
                            price = 31;
                            break;
                        case '28':
                            price = 34;
                            break;
                        case '30':
                            price = 36;
                            break;
                    }
                    break;
                case '2X6':
                    switch (lenght) {
                        case '8':
                            price = 24;
                            break;
                        case '10':
                            price = 25;
                            break;
                        case '12':
                            price = 27;
                            break;
                        case '14':
                            price = 30;
                            break;
                        case '16':
                            price = 32;
                            break;
                        case '18':
                            price = 34;
                            break;
                        case '20':
                            price = 35;
                            break;
                        case '22':
                            price = 39;
                            break;
                        case '24':
                            price = 42;
                            break;
                        case '26':
                            price = 45;
                            break;
                        case '28':
                            price = 46;
                            break;
                        case '30':
                            price = 48;
                            break;
                    }
                    break;
                case '4X4':
                    switch (lenght) {
                        case '8':
                            price = 29;
                            break;
                        case '10':
                            price = 31;
                            break;
                        case '12':
                            price = 32;
                            break;
                        case '14':
                            price = 35;
                            break;
                        case '16':
                            price = 39;
                            break;
                        case '18':
                            price = 45;
                            break;
                        case '20':
                            price = 47;
                            break;
                        case '22':
                            price = 50;
                            break;
                        case '24':
                            price = 54;
                            break;
                        case '26':
                            price = 59;
                            break;
                        case '28':
                            price = 65;
                            break;
                        case '30':
                            price = 67;
                            break;
                    }
                    break;
                case '5X5':
                    switch (lenght) {
                        case '8':
                            price = 32;
                            break;
                        case '10':
                            price = 35;
                            break;
                        case '12':
                            price = 38;
                            break;
                        case '14':
                            price = 44;
                            break;
                        case '16':
                            price = 47;
                            break;
                        case '18':
                            price = 50;
                            break;
                        case '20':
                            price = 52;
                            break;
                        case '22':
                            price = 54;
                            break;
                        case '24':
                            price = 57;
                            break;
                        case '26':
                            price = 61;
                            break;
                        case '28':
                            price = 65;
                            break;
                        case '30':
                            price = 69;
                            break;
                    }
                    break;
                case '6X6':
                    switch (lenght) {
                        case '8':
                            price = 42;
                            break;
                        case '10':
                            price = 46;
                            break;
                        case '12':
                            price = 49;
                            break;
                        case '14':
                            price = 55;
                            break;
                        case '16':
                            price = 58;
                            break;
                        case '18':
                            price = 62;
                            break;
                        case '20':
                            price = 66;
                            break;
                        case '22':
                            price = 68;
                            break;
                        case '24':
                            price = 72;
                            break;
                        case '26':
                            price = 75;
                            break;
                        case '28':
                            price = 78;
                            break;
                        case '30':
                            price = 82;
                            break;
                    }
                    break;
                case '13X4':
                    switch (lenght) {
                        case '8':
                            price = 59;
                            break;
                        case '10':
                            price = 63;
                            break;
                        case '12':
                            price = 64;
                            break;
                        case '14':
                            price = 68;
                            break;
                        case '16':
                            price = 77;
                            break;
                        case '18':
                            price = 84;
                            break;
                        case '20':
                            price = 88;
                            break;
                        case '22':
                            price = 93;
                            break;
                        case '24':
                            price = 97;
                            break;
                        case '26':
                            price = 102;
                            break;
                        case '28':
                            price = 104;
                            break;
                        case '30':
                            price = 110;
                            break;
                    }
                    break;
                case '13X6':
                    switch (lenght) {
                        case '8':
                            price = 61;
                            break;
                        case '10':
                            price = 65;
                            break;
                        case '12':
                            price = 66;
                            break;
                        case '14':
                            price = 70;
                            break;
                        case '16':
                            price = 79;
                            break;
                        case '18':
                            price = 97;
                            break;
                        case '20':
                            price = 104;
                            break;
                        case '22':
                            price = 106;
                            break;
                        case '24':
                            price = 109;
                            break;
                        case '26':
                            price = 111;
                            break;
                        case '28':
                            price = 117;
                            break;
                        case '30':
                            price = 123;
                            break;
                    }
                    break;
            }
            break;
    }

    if (cbtype == true) {
        bonusType = 1 * count;

    }
    if (cbcolor == true) {
        bonusColor = 1 * count;
    }

    price *= count;
    price = price + bonusType + bonusColor
    return price;
}

function getType(description) {
    type = document.getElementById("type")
    if (description.value == "CLOSURE") {
        closureCheckbox.show();
        type.innerHTML = CLOSURE
    } else {
        closureCheckbox.hide();
        colorCheckbox.checked = false;
        typeCheckbox.checked = false;
        type.innerHTML = OTHER
    }
}

function compute() {
    var cellprices = document.getElementsByClassName('cellprice');
    let shippingfee = document.getElementById('shippingfee');
    let discountfee = document.getElementsByClassName('discountfee')[0];
    let prices = [];
    cellprices.forEach(price => prices.push(price.innerHTML))
    let subtotal = prices.reduce((total, price) => {
        return Number(total) + Number(price);
    }, shippingfee.innerHTML)

    $("#subtotal").text(subtotal - shippingfee.innerHTML)
    return checkDiscount ? subtotal - discountfee.innerHTML : subtotal
}

function render() {
    $("#shippingfee").text($("input[name='shipping']").val())
    checkDiscount ? $(".discountfee").text($("#discount").val()) : $(".discountfee").text("0")
    $('#total').text(compute())
}

function add() {
    body = document.getElementById('body');
    price = getPrice(descriptionSelect.value, typeSelect.value, lenghtSelect.value, countSelect.value, noteSelect.value, typeCheckbox.checked, colorCheckbox.checked)
    row = body.insertRow(0);
    row.id = countRow();
    row.insertCell(0).innerHTML = `<td>${descriptionSelect.value}</td>`;
    row.insertCell(1).innerHTML = `<td>${typeSelect.value}</td>`;
    row.insertCell(2).innerHTML = `<td>${lenghtSelect.value}</td>`;
    row.insertCell(3).innerHTML = `<td>${countSelect.value}</td>`;
    cell4 = row.insertCell(4)
    cell4.innerHTML = `<td>${price}</td>`;
    cell4.setAttribute('class', 'cellprice');
    cell5 = row.insertCell(5)
    cell5.innerHTML = ` <td>${noteSelect.value}</td>`;
    cell5.setAttribute('contenteditable', 'true')
    row.insertCell(6).innerHTML = `<td>
    <button type="button" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
    <button type="button" class="btn btn-danger" onclick="remove(${countRow()})"><i class="fa-solid fa-trash-can"></i></button>
</td>`;
    render()
}


function countRow() {
    return document.getElementById('body').childElementCount;
}

function remove(id) {
    document.getElementById(id).remove();
    render()
}



function discount(checkbox) {
    if (checkbox.checked) {
        $('#discount').removeAttr('disabled');
        checkDiscount = true;
    } else {
        $('#discount').attr('disabled', true);
        checkDiscount = false;
    }
}