console.log("SUCCESS....");

function first() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    output.value = 0;
    //This for USDs
    if (document.getElementById("convert1").value == "USD1") {
        if (document.getElementById("convert2").value == "USD2") {
            output.value = input.value * 1;
        }
    }
    if (document.getElementById("convert1").value == "USD1") {
        if (document.getElementById("convert2").value == "GBP2") {
            output.value = input.value * 2.03032;
        }
    }
    if (document.getElementById("convert1").value == "USD1") {
        if (document.getElementById("convert2").value == "CAD2") {
            output.value = input.value * 1.01941;
        }
    }
    

    //This for GBPs
    if (document.getElementById('convert1').value == "GBP1") {
        if (document.getElementById("convert2").value == "GBP2") {
            output.value = input.value * 1;
        }
    }
    if (document.getElementById('convert1').value == "GBP1") {
        if (document.getElementById("convert2").value == "USD2") {
            output.value = input.value * 0.49246;
        }
    }
    if (document.getElementById('convert1').value == "GBP1") {
        if (document.getElementById("convert2").value == "CAD2") {
            output.value = input.value * 0.50221;
        }
    }
    
    //This for CADs
    if (document.getElementById('convert1').value == "CAD1") {
        if (document.getElementById("convert2").value == "CAD2") {
            output.value = input.value * 1;
        }
    }
    if (document.getElementById('convert1').value == "CAD1") {
        if (document.getElementById("convert2").value == "USD2") {
            output.value = input.value * 0.98054;
        }
    }
    if (document.getElementById('convert1').value == "CAD1") {
        if (document.getElementById("convert2").value == "GBP2") {
            output.value = input.value * 1.99169;
        }
    }
}
