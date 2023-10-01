// ..........................................................///ASSIGNMENT///.................................................................................//

// PROBLEM-01

function AnaToVori(ana) {

    if (ana < 0) {
        return 'Please, Enter a valid ana as input ';
    }
    var vori = ana / 16;
    return vori;
}



var result = AnaToVori(112);
console.log(result);

// PROBLEM-02
function PandaCost(SingaraQuantity, SomosaQuantity, JilabiQuantity) {
    // if (SingaraQuantity < 0 || SomosaQuantity < 0 || JilabiQuantity < 0) {
    //     return 'Please, Enter a valid Quantity as input ';
    // }
    const SingaraCost = 7;
    const SomosaCost = 7;
    const JilabiCost = 10;
    const TotalCostOFSingara = SingaraCost * SingaraQuantity;
    const TotalCostOFSomosa = SomosaCost * SomosaQuantity;
    const TotalCostOFJilabi = JilabiCost * JilabiQuantity;
    const TotalPrice = TotalCostOFSingara + TotalCostOFSomosa + TotalCostOFJilabi;
    return TotalPrice


}
const results = PandaCost(5, 5, 5);
console.log(results);

// PROBLEM-03

function oddFriend(names) {
    if (names.length % 2 != 0) {
        return names;
    }

}
const answer = oddFriend("Allah");
console.log(answer);



