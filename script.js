let str = "Hell5o Worl6d"
console.log(str)

function stripvalues(str)
{
    console.log(str.replace(/\D/g, ""));
}

stripvalues()