let childage = 17
let adultage = 18
let seniorage = 60
let child = "£8"
let adult = "£10.95"
let senior = "£7.50"

if (childage <= 17){
    console.log(`Please pay me ${child}`)
}
else if (adultage >18 && adultage <60){
    console.log(`Please pay me ${adult}`)
}
else if (seniorage =>60){
    console.log(`Please pay me ${senior}`)
}