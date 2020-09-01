let x = 3;
switch (true) {
    case x<1:    console.log("Small");    break;
    case x>=1 && x<=7:    console.log("Medium");
        break;
    case x>7:    console.log("Large");    break;
    default:
        console.log("No such value");
}
