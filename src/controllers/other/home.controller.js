const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {loadData}=require("../../data")
module.exports=(req,res)=>{
    const products=loadData()

    const productInSale=products.filter(p=>p.category ==="in-sale")
    const producsVisited=products.filter(p=>p.category ==="visited")

    res.render("other/home",{
        productInSale,
        producsVisited,
        toThousand
    })
    
}