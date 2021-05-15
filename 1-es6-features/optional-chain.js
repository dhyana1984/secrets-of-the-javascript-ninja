const helper = require('../helper')
const print = helper.print


//We have a API returned model like this structure
const data = {
    "AssetWeights": [
        {
            "FundWeightProportions": [
                {
                    "Name": "iShares MSCI Japan ETF",
                    "Proportion": 1
                },
                {
                    "Name": "iShares MSCI Singapore ETF",
                    "Proportion": 2.5
                }
            ]
        }]
}

/* We have to get the second "Proportion" value under the "FundWeightProportions" key.
 * In the past, we have to verify if the result is null or undefined.
 * The more complicated properties this object has, the longer verification logic will be in "if" syntax
*/
if (data &&
    data.AssetWeights &&
    data.AssetWeights.length &&
    data.AssetWeights[0].FundWeightProportions &&
    data.AssetWeights[0].FundWeightProportions.length &&
    data.AssetWeights[0].FundWeightProportions[1]) {
    const proportion = data.AssetWeights[0].FundWeightProportions[1].Proportion
    print("complicated verification of proportion:", proportion)
    //The real logic...
} else {
    print("The data is not correct")
}

/*
 * In ES6 code, we can use optional chain to optimise it, we no need to verify if there is undefined or null in the chain 
 * The js engine will detect the property or index after "?", if the property or index is not existed or the result is undefined
 * it will return "undefined"
*/

const proportion1 = data?.AssetWeights?.[0]?.FundWeightProportions?.[1].Proportion
if (!proportion1) {
    print("The data is not correct")
    return
}
print("optional chain of proportion:", proportion1)
//The real logic


const sample = [{ id: 1 }, "apple", { age: 3 }]

print(sample?.[0].id)                   //1
print(sample?.[1])                      //apple
print(sample?.[1].id)                   //undefined
print(sample?.[2]?.age)                 //3
print(sample?.[2]?.id)                  //undefined
print(sample?.[3])                      //undefined
print(sample?.[3]?.id?.[5]?.age)        //undefined

