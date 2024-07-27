const {check,body}=require("express-validator")

const fieldName=check("name")
.notEmpty().withMessage("El campo nombre es requerido").bail()
.isAlphanumeric("es-ES",{ignore:" "}).withMessage("El campo nombre debe ser alfanumerico").bail()
.isLength({mix:5,max:80}).withMessage("La longitud del nombre es incorrecto")

const fieldPrice=check("price")
.notEmpty().withMessage("El campo precio es requerido").bail()
.isNumeric().withMessage("El valor ingresado es incorrecto")
//bail funciona para que corte el codigo aca si lo de arriba se cumple*/

const fieldDiscount=check("discount")
.optional({
    nullable:true
})
.isNumeric().withMessage("El campo descuento deber ser un numero")

const fieldDescription=check("description")
.notEmpty().withMessage("La descripcion es requerida").bail()
.isAlphanumeric("es-ES")
.withMessage("El campo descripcion debe ser alfanumerico").bail()
.isLength({min:30,max:500}).withMessage("La longitud del nombre es incorrecto")

const fieldCategory = check("category")
.isIn(["in-sale","visited"]).withMessage("El campo category es requerido")

module.exports=[fieldName,fieldPrice,fieldDiscount,fieldDescription,fieldCategory]