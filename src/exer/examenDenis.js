fetch('data/productes.json')
    .then(res => res.json())
    .then((data) => {
        let div = document.querySelector('.productes');
        let template = ``;
        data.forEach((item) => {
            let disponibilitat = '';
            if (item.inventory) {
                disponibilitat += `<ul>`;
                item.inventory.warehouses.forEach((location) => {
                    console.log(location.name);
                    disponibilitat += `<li>${location.name}: ${location.availableQuantity}</li>`;
                });
                disponibilitat += `</ul>`;
            } else {
                disponibilitat += `Sense Disponibilitat`;
            }
            template +=
                `<div>
                <ul>
                <li><h1>${item.name}</h1></li>
                <li><p><b>Descripció:</b>${item.description}</p></li>
                <li><p><b>Disponibilitat:</b>${disponibilitat}</p></li>
                </ul>
            </div>`;
        });
        console.log(template);
        div.innerHTML = template;
    });
