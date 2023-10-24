const verdictElement = document.querySelector("#verdict");
let verdictList = [];
var income = 0;
let bool = ""

function myFunction ()
{
    var rent = parseFloat(document.getElementById("rent").value);
    var electricity = parseFloat(document.getElementById("electricity").value);
    var garbage = parseFloat(document.getElementById("garbage").value);
    var cable = parseFloat(document.getElementById("cable").value);
    var groceries = parseFloat(document.getElementById("groceries").value);
    var phone = parseFloat(document.getElementById("phone").value);
    var internet = parseFloat(document.getElementById("internet").value);
    var student = parseFloat(document.getElementById("student").value);
    var car_loan = parseFloat(document.getElementById("car").value);
    var health = parseFloat(document.getElementById("health").value);
    var car_insure = parseFloat(document.getElementById("insure").value);
    var renter = parseFloat(document.getElementById("renter").value);
    var travel = parseFloat(document.getElementById("travelling").value);
    var restaurant = parseFloat(document.getElementById("restaurant").value);
    var shopping = parseFloat(document.getElementById("shop").value);
    var misc = parseFloat(document.getElementById("misc").value);
    var emergency = parseFloat(document.getElementById("emergency").value);
    var retirement = parseFloat(document.getElementById("retire").value);
    var additional = parseFloat(document.getElementById("additional").value);
    var allowance = parseFloat(document.getElementById("allowance").value);
    var wage = parseFloat(document.getElementById("wage").value);
    var sale = parseFloat(document.getElementById("sale").value);
    var invest = parseFloat(document.getElementById("invest").value);
    var government = parseFloat(document.getElementById("government").value);

    var exp_pre = rent + electricity + garbage + cable + groceries + phone + internet + student + car_loan + health + car_insure + renter + travel + restaurant + shopping + misc + emergency + retirement + additional;
    var exp_tax = exp_pre * 0.2;
    var exp_tot = exp_pre + exp_tax
    var earn_pre = allowance + wage + sale + invest + government;
    var earn_tax = earn_pre * 0.2;
    var earn_tot = earn_pre - earn_tax
    var income = earn_tot - exp_tot

    if (income < 0)
    {
        bool = "bad"
    }
    else if (income == 0)
    {
        bool = "well"
    }
    else if (income > 0)
    {
        bool = "good"
    };

    document.getElementById("pre").innerHTML = "Pre-Tax: " + exp_pre
    document.getElementById("tax").innerHTML = "Tax 20%: " + exp_tax
    document.getElementById("tot").innerHTML = "Total: " + exp_tot
    document.getElementById("e_pre").innerHTML = "Pre-Tax: " + earn_pre
    document.getElementById("e_tax").innerHTML = "Tax 20%: " + earn_tax
    document.getElementById("e_tot").innerHTML = "Total: " + earn_tot
    document.getElementById("income").innerHTML = "Monthly Earnings: " + earn_tot + " - Monthly Expenses: " + exp_tot + " = Monthly Income: " + income
    
    getVerdict();
    sortBy(verdictList);
};



const displayVerdict = (verdicts) => {
    verdicts.forEach (verdict => {
            const article = document.createElement("article");
            const h3 = document.createElement("h3");
            h3.textContent = verdict.commentary;
            const img = document.createElement("img");
            img.src = verdict.imageUrl;
            img.alt = verdict.alt;
            article.appendChild(h3);
            article.appendChild(img);
            verdictElement.appendChild(article);
        });
};

const getVerdict = async () => {
    const response = await fetch("https://run.mocky.io/v3/3e40a4d5-9f31-4867-8ac8-b9f1885a5b57");
    if (response.ok) {
        const data = await response.json();
        verdictList = data;
    };
};

const reset = () => {
    verdictElement.innerHTML = "";
};

const sortBy = (verdicts) => {
    reset();
    switch (bool) {
        case "bad":
            displayVerdict(verdicts.filter((verdict) => verdict.range.includes("<")));
            break;

        case "well":
            displayVerdict(verdicts.filter((verdict) =>verdict.range.includes("0")));
            break;

        case "good":
            displayVerdict(verdicts.filter((verdict) =>verdict.range.includes(">")));
            break;
    };
};