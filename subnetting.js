const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const IP = document.getElementById('IP').value;
    const subnet = document.getElementById('subnet').value;
    const convertSubnetToNumber = parseInt(subnet);

    // alert(`
    //     IP: ${IP}
    //     Subnet: ${subnet}
    // `);
    console.log(cariNetwork(IP));
    console.log(cariSubnetmask(convertSubnetToNumber));
    console.log(cariJmlSubnet(convertSubnetToNumber));
    console.log(cariJmlHostPerSubnet(convertSubnetToNumber));
})



// // let IP = [192, 168, 10, 3];
// let IP = "192.168.10.3";
// let subnet = 25;

function cariNetwork(IP) {
    // IP.pop();
    // IP.push(0)
    // return IP;

    const splitIP = IP.split(".");
    splitIP.pop()
    splitIP.push(0);

    const newNetwork = `${splitIP[0]}.${splitIP[1]}.${splitIP[2]}.${splitIP[3]}`
    return newNetwork;
}

function cariSubnetmask(subnet) {
    let hasilCari = '255.255.255.';
    let hasilPangkat = 0;
    switch (subnet) {
        case 24:
            for (let i = 7; i > 7; i--) {
                hasilPangkat += 2 ** i;
            }
            // console.log(hasilPangkat);
            hasilCari += `${hasilPangkat}`; //0
            break;
        case 25:
            for (let i = 7; i > 6; i--) {
                hasilPangkat += 2 ** i;
            }
            // console.log(hasilPangkat);
            hasilCari += `${hasilPangkat}`; //128
            break;
        case 26:
            for (let i = 7; i > 5; i--) {
                hasilPangkat += 2 ** i;
            }
            // console.log(hasilPangkat);
            hasilCari += `${hasilPangkat}`; //192
            break;
        case 27:
            for (let i = 7; i > 4; i--) {
                hasilPangkat += 2 ** i;
            }
            // console.log(hasilPangkat);
            hasilCari += `${hasilPangkat}`; //224
            break;
        case 28:
            for (let i = 7; i > 3; i--) {
                hasilPangkat += 2 ** i;
            }
            // console.log(hasilPangkat);
            hasilCari += `${hasilPangkat}`; //240
            break;
        case 29:
            for (let i = 7; i > 2; i--) {
                hasilPangkat += 2 ** i;
            }
            // console.log(hasilPangkat);
            hasilCari += `${hasilPangkat}`; //248
            break;
        case 30:
            for (let i = 7; i > 1; i--) {
                hasilPangkat += 2 ** i;
            }
            // console.log(hasilPangkat);
            hasilCari += `${hasilPangkat}`; //252
            break;
        case 31:
            for (let i = 7; i > 0; i--) {
                hasilPangkat += 2 ** i;
            }
            // console.log(hasilPangkat);
            hasilCari += `${hasilPangkat}`; //254
            break;

        default:
            hasilCari = 'Bukan IP class C';
            break;
    }

    return hasilCari;
}

function cariJmlSubnet(subnet) {
    let jmlSubnet = 0;
    switch (subnet) {
        case 24:
            jmlSubnet = 1;
            break;
        case 25:
            jmlSubnet = 2 ** 1;
            break;
        case 26:
            jmlSubnet = 2 ** 2;
            break;
        case 27:
            jmlSubnet = 2 ** 3;
            break;
        case 28:
            jmlSubnet = 2 ** 4;
            break;
        case 29:
            jmlSubnet = 2 ** 5;
            break;
        case 30:
            jmlSubnet = 2 ** 6;
            break;
        case 31:
            jmlSubnet = 2 ** 7;
            break;

        default:
            jmlSubnet = 'Bukan IP class C';
            break;
    }
    return jmlSubnet;
}

function cariJmlHostPerSubnet(subnet) {
    let jmlHostPerSubnet = 0;
    switch (subnet) {
        case 24:
            jmlHostPerSubnet = 2 ** 8 - 1;
            break;
        case 25:
            jmlHostPerSubnet = 2 ** 7 - 2;
            break;
        case 26:
            jmlHostPerSubnet = 2 ** 6 - 2;
            break;
        case 27:
            jmlHostPerSubnet = 2 ** 5 - 2;
            break;
        case 28:
            jmlHostPerSubnet = 2 ** 4 - 2;
            break;
        case 29:
            jmlHostPerSubnet = 2 ** 3 - 2;
            break;
        case 30:
            jmlHostPerSubnet = 2 ** 2 - 2;
            break;
        case 31:
            jmlHostPerSubnet = 2 ** 1 - 2;
            break;

        default:
            break;
    }
    return jmlHostPerSubnet;
}



// console.log(cariNetwork(IP));
// console.log(cariSubnetmask(subnet));
// console.log(cariJmlSubnet(subnet));
// console.log(cariJmlHostPerSubnet(subnet));