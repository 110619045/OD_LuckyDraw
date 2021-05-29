$('.js-start').on('click', function () {
    num = document.getElementById('num').value;
    console.log(num);
    if(num>100){
        alert("次數請小於100");
    }
    if(num<=100){
        // setTimeout(function() {
        //     window.location.replace("index2.html");
        // }, 3000);
    
        var arr = [];
        arr.length = num;
        console.log(arr);

        for(var a=0; a<num; a++){
            var items=["A", 
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
            $('.js-result').text('等待開將結果...');
            console.log(items[randomArray[randomNumber]]);
            arr[a]=items[randomArray[randomNumber]];
            console.log(arr);
        }
        setTimeout(function() {
            $('.js-result').text('開獎結果：' + arr);
        }, 3000);
        return items[randomArray[randomNumber]];
    }
});


// $('.js-start').on('click', function () {
//     // window.location.replace("index2.html");

//     var options = $('.js-textarea').val().split('\n');
//     var rand = Math.floor(Math.random()*options.length);

//     $('.js-img-shake').show();
//     $('.js-img-ok').hide();
//     $('.js-result').text('等待開將結果...');
//     setTimeout(function() {
//         $('.js-img-shake').hide();
//         $('.js-img-ok').show();
//         $('.js-result').text('開獎結果：' + options[rand]);
//     }, 3000);
// });



// var items=["A", 
//     "B1", "B2", "B3", "B4", "B5", "B6", "B7", 
//     "C1", "C2", "C3", "C4", "C5", "C6", "C7", 
//     "D1", "D2", "D3", "D4", "D5", "D6", "D7", 
//     "E1", "E2", "E3", "E4", "E5", "E6", "E7"];
// var itemsWeight=[13, 
//     10, 10, 10, 10, 10, 10, 10, 
//     20, 20, 20, 20, 20, 20, 20, 
//     40, 40, 40, 40, 40, 40, 40, 
//     71, 71, 71, 71, 71, 71, 71];

// function weightedRandom(items, itemsWeight)
// {
//     num = document.getElementById('num').value;
//     // console.log(num);

//     var totalWeight=eval(itemsWeight.join("+"));
//     console.log(totalWeight);
//     // 1000
//     var randomArray=[];
//     for(var i=0; i<items.length; i++)
//     {
//         for(var j=0; j<itemsWeight[i]; j++)
//         {
//             randomArray.push(i);
//         }
//     }
//     var randomNumber=Math.floor(Math.random()*totalWeight);
//     console.log(items[randomArray[randomNumber]]);

//     // return items[randomArray[randomNumber]];
// }
// weightedRandom(items, itemsWeight);      