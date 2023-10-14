let IP = [192, 168, 10, 3];
let subnet = 27;

function cariNetwork(IP) {
    IP.pop();
    IP.push(0)
    return IP;
}

function cariSubnetmask(subnet) {
    let hasilCari = '255.255.255.';
    switch (subnet) {
        case 24:
            hasilCari += '0';
            break;
        case 25:
            hasilCari += '128';
            break;
        case 26:
            hasilCari += '192';
            break;
        case 27:
            hasilCari += '224';
            break;
        case 28:
            hasilCari += '240';
            break;
        case 29:
            hasilCari += '248';
            break;
        case 30:
            hasilCari += '252';
            break;
        case 31:
            hasilCari += '254';
            break;

        default:
            hasilCari = 0;
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



console.log(cariNetwork(IP));
console.log(cariSubnetmask(subnet));
console.log(cariJmlSubnet(subnet));
console.log(cariJmlHostPerSubnet(subnet));