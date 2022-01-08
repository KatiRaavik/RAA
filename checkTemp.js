// 0-20 liiga külm  -1
// 21-40 paras      0
// 41-60 liiga kuum 1
// checkTemp(temp)
// checkTemp.js

function checkTemp(temp) {
    if (temp < 21) {
        return -1;
    } else {
        if (temp > 20 && temp < 41) {
            return 0;
        } else {
            if (temp > 40) {
                return 1;
            }
        }
    }
}