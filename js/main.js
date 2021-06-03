$('.get-num').on('click',function(){
    num = document.getElementById('num').value;
    console.log(num);
    if(num>100){
        alert("次數請小於100");
    }
    if(num<=100){
        window.location.href="index2.html?id="+num+"";
    }
})

var id= location.search.replace(/[^\d]/g, "")
var arr = [];

start();
function start(){
    console.log("123");
    // num = document.getElementById('id').value;
    console.log(id);
    if(id>100){
        alert("次數請小於100");
    }
    if(id<=100){
        
        arr.length = id;
        console.log(arr);
        
        for(var a=0; a<id; a++){
            var items=["A1", 
            "B1", "B2", "B3", "B4", "B5", "B6", "B7", 
            "C1", "C2", "C3", "C4", "C5", "C6", "C7", 
            "D1", "D2", "D3", "D4", "D5", "D6", "D7", 
            "E1", "E2", "E3", "E4", "E5", "E6", "E7"];
            var itemsWeight=[13, 
                10, 10, 10, 10, 10, 10, 10, 
                20, 20, 20, 20, 20, 20, 20, 
                40, 40, 40, 40, 40, 40, 40, 
                71, 71, 71, 71, 71, 71, 71];
            var totalWeight=eval(itemsWeight.join("+"));
            console.log(totalWeight);
            var randomArray=[];
            for(var i=0; i<items.length; i++)
            {
                for(var j=0; j<itemsWeight[i]; j++)
                {
                    randomArray.push(i);
                }
            }
            var randomNumber=Math.floor(Math.random()*totalWeight);
            console.log(items[randomArray[randomNumber]]);
            arr[a]=items[randomArray[randomNumber]];
            console.log(arr);
        }

        setTimeout(function() {
            $('.js-result').text('開獎結果');
        }, 2000);

        return items[randomArray[randomNumber]];
    }
}

const imgStr = "./src/ID_HERE.png";
$(document).ready(function() {
    let $template = $('#template01');
    for(let i=0;i<arr.length;i++){
        let $node = $template.html();
        let imgUrl = imgStr.replace(/ID_HERE/g, arr[i]);
        $node = $node.replace(/TEXT_HERE/g,i);
        
        setTimeout(function() {
            $node = $node.replace('IMG_HERE',imgUrl);
            $('aside').append($node);
        }, 3000);
    }
});

$('.home').on('click',function(){
    window.location.href="index.html";
})


var hide = function(y){
    console.log(y);
    $('#'+y).hide(3);
    return y;
};
