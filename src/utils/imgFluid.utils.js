const getImgFluid = (data, obj) => {
    let imgData = null;
    switch (obj) {
        case 'telemark':
            imgData = data.telemark.childImageSharp.fluid
            break;
        case 'endOfTheWorld':
            imgData = data.endOfTheWorld.childImageSharp.fluid
            break;
        case 'western':
            imgData = data.western.childImageSharp.fluid
            break;
        case 'trolltunga':
            imgData = data.trolltunga.childImageSharp.fluid
            break;
        case 'kongens_utsikt':
            imgData = data.kongens_utsikt.childImageSharp.fluid
            break;
        case 'rampestreken':
            imgData = data.rampestreken.childImageSharp.fluid
            break;
        case 'akerselva':
            imgData = data.akerselva.childImageSharp.fluid
            break;
        case 'autumn':
            imgData = data.autumn.childImageSharp.fluid
            break;
        case 'dog_sledding':
            imgData = data.dog_sledding.childImageSharp.fluid
            break;
        case 'osl_dec':
            imgData = data.osl_dec.childImageSharp.fluid
            break;
        case 'bergen':
            imgData = data.bergen.childImageSharp.fluid
            break;
        default:
            break;
       }
       return imgData;
}

export default getImgFluid;